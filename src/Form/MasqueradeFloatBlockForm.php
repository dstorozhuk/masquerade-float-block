<?php

/**
 * @file
 * Contains \Drupal\masquerade\Form\MasqueradeForm.
 */

namespace Drupal\masquerade_float_block\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form builder for the masquerade_float_block admin form.
 */
class MasqueradeFloatBlockForm extends ConfigFormBase {
  /**
   * {@inheritdoc}
   */
  function getEditableConfigNames() {
    return ['masquerade_float_block.settings',];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'masquerade_float_block_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('masquerade_float_block.settings');
    $form['visible'] = array(
      '#title'         => t('Enabled'),
      '#description'   => t('Check to enable the Masquerade float block.
      The default Masquerade block position will not be affected.'),
      '#type'          => 'checkbox',
      '#default_value' => $config->get('visible'),
    );

    $form['actions'] = array('#type' => 'actions');
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Save'),
    );
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    $config = $this->config('masquerade_float_block.settings');
    $config->set('visible', $form_state->getValue('visible'));
    $config->save();
  }

}
