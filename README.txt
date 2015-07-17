Masquerade float block
======================

This is simple module which works with Masquerade module and provides float
Masquerade block.
The module is useful when you use panels everywhere on the site and
features to export the configuration.
With this module you don't need to care about removing Masquerade
block from panel configuration for stage or live environment.

Initial block position is left top, but it can be changed by dragging the block.
Position will be remembered.

Block inherits all settings from native Masquerade block.

USAGE:
Once module was enabled, you will see the Masquerade block on the
left top position.

Also, you can control appearing of the Masquerade block in two ways:

1. pass the ?mfb_show parameter in GET request to 1 or 0
   ex.: http://site.com?mfb_show=1 - enable Masquerade block
  - 1 enable Masquerade block on all pages
  - 0 disable Masquerade block on all pages
2. set the "masquerade_float_block_visible" variable to 1 or 0.
  ex.: variable_set('masquerade_float_block_visible', 1) - enable Masquerade block
  in settings.php:
     $cong['masquerade_float_block_visible'] = 0 - disable Masquerade block

TODO:
Add admin UI.
