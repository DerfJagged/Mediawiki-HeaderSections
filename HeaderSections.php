<?php
if ( function_exists( 'wfLoadExtension' ) ) {
    wfLoadExtension( 'HeaderSections' );
    return;
}
else {
    die( 'This extension requires MediaWiki 1.25+' );
}

