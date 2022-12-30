( function ( $, mw ) {
	'use strict';

	const non_nesting = {
		'H1': 'H1',
		'H2': 'H1,H2',
		'H3': 'H1,H2,H3',
		'H4': 'H1,H2,H3,H4',
		'H5': 'H1,H2,H3,H4,H5',
		'H6': 'H1,H2,H3,H4,H5,H6'
	};

	mw.hook( 'wikipage.content' ).add( function () {
		$('h1,h2,h3,h4,h5,h6').each (function() {
			var headtype = $(this).prop('tagName');
			$(this).nextUntil( non_nesting[headtype] )['addClass'](headtype + '-section')
		});
	} );
}( jQuery, mediaWiki ) );