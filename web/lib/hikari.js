var hikari = {};
(function () {
    // "use strict";
    $.extend(hikari, {
        addGlobalStyle: function (name, style) {
            var styleText = '<style></style>',
                prefix = 'global-css-';
            $('#' + name).remove();
            var $s = $(styleText);
            $s.attr('id', prefix + name);
            $s.text(style);
            $(document.head).append($s);
        }
    });
})();
