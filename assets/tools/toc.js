(function($) {
    $.fn.toc = function(options) {
        var defaults = {
            noBackToTopLinks: false,
            title: '',
            minimumHeaders: 3,
            headers: 'h1, h2, h3, h4, h5, h6',
            listType: 'ol', // values: [ol|ul]
            showEffect: 'show', // values: [show|slideDown|fadeIn|none]
            showSpeed: 'slow' // set to 0 to deactivate effect
        },
        settings = $.extend(defaults, options);

        function fixedEncodeURIComponent(str) {
            return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
                return '%' + c.charCodeAt(0).toString(16);
            });
        }

        var headers = $(settings.headers).filter(function() {
            // get all headers with an ID
            var previousSiblingName = $(this).prev().attr("name");
            if (!this.id && previousSiblingName) {
                this.id = $(this).attr("id", previousSiblingName.replace(/\./g, "-"));
            }
            return this.id;
        }), output = $(this);
        if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
            return;
        }

        if (0 === settings.showSpeed) {
            settings.showEffect = 'none';
        }

        var get_level = function(ele) {
            return parseInt(ele.nodeName.replace("H", ""), 10);
        };
        var highest_level = headers.map(function(_, ele) {
            return get_level(ele);
        }).get().sort()[0];
        var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

        var level = get_level(headers[0]),
            this_level,
            html = settings.title + " <" + settings.listType + ">";
        var numberStack = [0];

        headers.on('click', function() {
            if (!settings.noBackToTopLinks) {
                window.location.hash = this.id;
            }
        })
        .addClass('clickable-header')
        .each(function(_, header) {
            this_level = get_level(header);
            if (this_level === level) {
                numberStack[numberStack.length - 1]++;
            } else if (this_level > level) {
                numberStack.push(1);
            } else {
                numberStack = numberStack.slice(0, this_level - highest_level + 1);
                numberStack[numberStack.length - 1]++;
            }
            level = this_level;

            var numberString = numberStack.join('.');
            html += "<a href='#" + fixedEncodeURIComponent(header.id) + "'>" + numberString + " " + header.innerHTML + "</a><br>";
        });
        html += "</" + settings.listType + ">";

        if (!settings.noBackToTopLinks) {
            $(document).on('click', '.back-to-top', function() {
                $(window).scrollTop(0);
                window.location.hash = '';
            });
        }

        switch (settings.showEffect) {
            case 'show':
                output.html(html).show();
                break;
            case 'slideDown':
                output.html(html).slideDown(settings.showSpeed);
                break;
            case 'fadeIn':
                output.html(html).fadeIn(settings.showSpeed);
                break;
            default:
                output.html(html).show();
        }
    };
})(jQuery);