/*

Gymnasium tabbification.

To use: Select your tabs, then call "makeTabsFor" with the selector
for your content elements.

$('#categories > h3').makeTabsFor('#categories > ul');

*/

$(document.head).append('<link rel="stylesheet" href="gymnasium-tabs/gymnasium-tabs-1.0.css"/>');

$.fn.makeTabsFor = function(contentSelector) {
	var $tabs = this,
		$contents = $(contentSelector);
	if ($tabs.length !== $contents.length) throw new Error('Content selector must return same number of elements as receiver.');
	$tabs.each(function(tab, i) {
		var $tab = $(tab),
			$content = $($contents[i]);
		// Closures are magic!
		$tab.each(function() {
			$tabs.removeClass('active');
			$tab.addClass('active');
			$contents.removeClass('active');
			$content.addClass('active');
		})
	})
	// Set initial state.
	$tabs.addClass('active first');
	$tabs.last().addClass('last');
	$contents.addClass('active');
};
