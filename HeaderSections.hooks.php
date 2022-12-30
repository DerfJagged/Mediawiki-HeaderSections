<?php
/**
 * Hooks for extension HeaderSections.
 * @ingroup Extensions
 */

class HeaderSectionsHooks {
    public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
        $out->addModules( 'ext.headerSections' );
        return true;
     }
}

