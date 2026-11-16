<?php

namespace Slub\SlubDigitalcollections\EventListener;

use Brotkrueml\Schema\Core\Model\NodeIdentifier;
use Brotkrueml\Schema\Manager\SchemaManager;
use Brotkrueml\Schema\Type\TypeFactory;
use Kitodo\Dlf\Domain\Model\Document;
use Kitodo\Dlf\Domain\Repository\DocumentRepository;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Frontend\Event\BeforePageIsRenderedEvent;

final class KitodoSchemaListener
{
    public function __construct(
        private readonly SchemaManager $schemaManager,
        private readonly TypeFactory $typeFactory,
        private readonly DocumentRepository $documentRepository,
    ) {}

    public function __invoke(BeforePageIsRenderedEvent $event): void
    {
        $request = $event->getRequest();
        $document = $this->resolveKitodoDocument($request);

        if ($document === null) {
            return;
        }

        // 1. Load the underlying METS/MODS/IIIF document object
        $doc = $document->getCurrentDocument();
        if ($doc === null) {
            return;
        }

        // 2. Extract title data from the top-level logical structure
        $metadata = $doc->getTitledata();
        $pageUrl = (string) $request->getUri();

        // 3. Map Kitodo document type to Schema.org type
        $schemaType = $this->mapDocumentType($document->getStructure()?->getIndexName() ?? '');
        $entity = $this->typeFactory->create($schemaType);
        $entity->setId(new NodeIdentifier($pageUrl . '#work'));
        $entity->setProperty('url', $pageUrl);

        // 4. Populate core metadata fields (keys depend on your tx_dlf_metadata configuration)
        if (!empty($metadata['title'][0])) {
            $entity->setProperty('name', $metadata['title'][0]);
        }

        if (!empty($metadata['year'][0])) {
            $entity->setProperty('datePublished', (string)$metadata['year'][0]);
        }

        if (!empty($metadata['language'][0])) {
            $entity->setProperty('inLanguage', $metadata['language'][0]);
        }

        if (!empty($metadata['urn'][0])) {
            $entity->setProperty('identifier', $metadata['urn'][0]);
        }

        if (!empty($metadata['license'][0])) {
            $entity->setProperty('license', $metadata['license'][0]);
        }

        // 5. Add Author(s) as nested Person entities
        if (!empty($metadata['author'])) {
            $authors = [];
            foreach ($metadata['author'] as $authorName) {
                $person = $this->typeFactory->create('Person');
                $person->setProperty('name', $authorName);
                $authors[] = $person;
            }
            $entity->setProperty('author', count($authors) === 1 ? $authors[0] : $authors);
        }

        // 6. Link the holding institution (Library/Archive)
        $provider = $this->typeFactory->create('Library');
        $provider->setId(new NodeIdentifier('https://examplelibrary.org'));
        $provider->setProperty('name', 'Example Library');
        $provider->setProperty('url', 'https://examplelibrary.org');
        $entity->setProperty('provider', $provider);

        // 7. Register the entity as the primary subject of the webpage
        $this->schemaManager->addMainEntityOfWebPage($entity, true);
    }

    private function resolveKitodoDocument(ServerRequestInterface $request): ?Document
    {
        $queryParams = $request->getQueryParams()['tx_dlf'] ?? [];
        $parsedBody = is_array($request->getParsedBody()) ? ($request->getParsedBody()['tx_dlf'] ?? []) : [];
        $dlfParams = array_merge($queryParams, $parsedBody);

        if (!empty($dlfParams['id'])) {
            // Supports numeric UID or record_id/URN lookup depending on your Kitodo setup
            if (is_numeric($dlfParams['id'])) {
                return $this->documentRepository->findByUid((int)$dlfParams['id']);
            }
            return $this->documentRepository->findOneBy(['recordId' => (string)$dlfParams['id']]);
        }

        return null;
    }

    private function mapDocumentType(string $kitodoType): string
    {
        return match (strtolower($kitodoType)) {
            'monograph', 'volume', 'multivolume_work' => 'Book',
            'manuscript' => 'Manuscript',
            'newspaper', 'issue' => 'Newspaper',
            'periodical' => 'Periodical',
            'act', 'file', 'letter', 'charter' => 'ArchiveComponent',
            'map' => 'Map',
            default => 'CreativeWork',
        };
    }
}