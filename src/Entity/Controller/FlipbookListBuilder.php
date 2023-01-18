<?php

namespace Drupal\flipbook\Entity\Controller;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Render\Markup;

/**
 * Provides a list controller for content_entity_example_contact entity.
 *
 * @ingroup content_entity_example
 */
class FlipbookListBuilder extends EntityListBuilder {

    /**
     * {@inheritdoc}
     *
     * We override ::render() so that we can add our own content above the table.
     * parent::render() is where EntityListBuilder creates the table using our
     * buildHeader() and buildRow() implementations.
     */
    public function render() {
        $build['description'] = [
            '#markup' => $this->t('Flipbook Entity Example implements a Flipbooks model. These flipbooks are fieldable entities. You can manage the fields on the <a href="@adminlink">Flipbook admin page</a>.', array(
                '@adminlink' => \Drupal::urlGenerator()
                        ->generateFromRoute('flipbook.settings'),
            )),
        ];

        $build += parent::render();
        return $build;
    }

    /**
     * {@inheritdoc}
     *
     * Building the header and content lines for the flipbook list.
     *
     * Calling the parent::buildHeader() adds a column for the possible actions
     * and inserts the 'edit' and 'delete' links as defined for the entity type.
     */
    public function buildHeader() {
        $header['id'] = $this->t('FlipbookID');
        $header['name'] = $this->t('Name');
        $header['flipbook_cover'] = $this->t('FlipBook Cover');
        $header['flipbook'] = $this->t('Flipbook Pdf');
        return $header + parent::buildHeader();
    }

    /**
     * {@inheritdoc}
     */
    public function buildRow(EntityInterface $entity) {
        $row['id'] = $entity->id();
        $row['name'] = $entity->toLink()->toString();
        $fid = $entity->toArray()['flipbook_cover'][0]['target_id'];
        $pid = $entity->toArray()['flipbook'][0]['target_id'];
        $file = \Drupal\file\Entity\File::load($fid);
        $pfile = \Drupal\file\Entity\File::load($pid);
        $path = $file->getFileUri();
        $pdfpath = \Drupal::service('file_url_generator')->generateAbsoluteString($pfile->getFileUri());
        $ppath = $pfile->getFileUri();
        $fname = $file->getFilename();
        $pname = $pfile->getFilename();
        $url = \Drupal\image\Entity\ImageStyle::load('large')->buildUrl($path);
        $row['flipbook_cover'] = Markup::create('<a href=' . $url . ' target="_blank">' . $fname . '</a>');
        $row['flipbook'] = Markup::create('<a href=' . $pdfpath . ' target="_blank">' . $pname . '</a>');
        return $row + parent::buildRow($entity);
    }

}
