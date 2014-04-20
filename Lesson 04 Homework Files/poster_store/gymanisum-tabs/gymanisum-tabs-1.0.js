$(document.head).append('<link rel="stylesheet" href="gymanisum-tabs/gymanisum-tabs-1.0.css"/>');

/*
* The receiver will be the element which will be the tabs
*
* To use, select your tabs and then call makeTabsFor() passing in the conetnt of the tabs
* such as:
* $('#categories > h3').makeTabsFor('#categories > ul');
* */
$.fn.makeTabsFor =function (contentSelector) {
    var $tabs = this; //
    var $contents = $(contentSelector);
//                SetupTab(0, $tabs, $contents);
//                SetupTab(1, $tabs, $contents);
//                SetupTab(2, $tabs, $contents);

    $tabs.each(function (i, tab) {
        var $tab = $(tab);
        // each() will give you the raw HTML element, but we want the jQuery object hence we use $(tab)
        var $content = $($contents[i]);

        if ($tabs.length !== $contents.length) {
            throw new Error('Content selector must have the same number of elements as receiver');
        }

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

