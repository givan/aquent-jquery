$(document.head).append('<link rel="stylesheet" href="gymanisum-tabs/gymanisum-tabs-1.0.css"/>');

// tabbify plugin will be called on the '#categories' element
// which is what 'this' refers to it here
$.fn.tabbify =function () {
    var $tabs = this.find('h3'); //
    var $contents = this.find('ul');
//                SetupTab(0, $tabs, $contents);
//                SetupTab(1, $tabs, $contents);
//                SetupTab(2, $tabs, $contents);

    $tabs.each(function (i, tab) {
        var $tab = $(tab);
        // each() will give you the raw HTML element, but we want the jQuery object hence we use $(tab)
        var $content = $($contents[i]);

        $tab.click(function () {
            $tabs.removeClass('active');
            $tab.addClass('active');
            $contents.removeClass('active');
            $content.addClass('active');
        });
    });

    $tabs.first().addClass('active first');
    $contents.first().addClass('active');
    $tabs.last().addClass('last');
};

