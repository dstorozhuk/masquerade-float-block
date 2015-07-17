(function($) {

  Drupal.behaviors.mfb = {
    attach: function(context, settings) {
      $('body', context).once('mfb', function() {
        var form = settings.masquerade_float_block.block.content;
        var dialog = $('<div />').attr({title: settings.masquerade_float_block.block.subject}).html(settings.masquerade_float_block.block.content);

        var switcher = $('<div />').attr({style: "position: absolute;top:25px;right:0;background-color:black;color:white;cursor:pointer;z-index:999;padding:2px 4px;"});

        $(this).append(dialog);
        Drupal.attachBehaviors(form, settings);

        // 0 - closed.
        // 1 - opened.
        var dialog_state = $.cookie('mfb-dialog-state') || 1;
        // Elements position memory.
        var switcher_pos_top = $.cookie('mfb-switcher_pos_top') || 25;
        var switcher_pos_left = $.cookie('mfb-switcher_pos_left') || 0;
        var dialog_pos_top = $.cookie('mfb-dialog_pos_top') || 25;
        var dialog_pos_left = $.cookie('mfb-dialog_pos_left') || 0;

        switcher.css({top: switcher_pos_top + 'px', left: switcher_pos_left + 'px'});

        dialog.dialog({
          autoOpen: dialog_state == 1 ? true : false,
          position: {
            my: "left+" + dialog_pos_left + " top+" + dialog_pos_top,
            at: "left top",
            of: window
          },
          //position: [dialog_pos_top, dialog_pos_left],
          resizable: false,
          dragStop: function( event, ui ) {
            console.log(ui);
            $.cookie('mfb-dialog_pos_top', ui.position.top, {path: '/'});
            $.cookie('mfb-dialog_pos_left', ui.position.left, {path: '/'});
          },
          modal: true,
          close: function( event, ui ) {
            switcher.show();
            $.cookie('mfb-dialog-state', 0, {path: '/'});
          },
          open: function( event, ui ) {
            $.cookie('mfb-dialog-state', 1, {path: '/'});
          },
          buttons: {
            "Hide": function() {
              $( this ).dialog( "close" );
              switcher.show();
            }
          }
        });

        switcher.height(20);
        switcher.width(170);

        switcher.draggable({
          stop: function( event, ui ) {
            $.cookie('mfb-switcher_pos_top', ui.position.top, {path: '/'});
            $.cookie('mfb-switcher_pos_left', ui.position.left, {path: '/'});
          }
        });

        var t = Drupal.t;
        switcher.html(t('Show masquerade block'));
        $(this).append(switcher);


        if (dialog_state == 1) {
          switcher.hide();
        }

        switcher.click(function() {
          dialog.dialog('open');
          switcher.hide();
        });

      });
    }
  };

})(jQuery);
