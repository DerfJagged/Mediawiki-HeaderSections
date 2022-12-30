# HeaderSections

A Mediawiki extension that adds a CSS class to the section of content below
a header. This effectively allows for CSS styling to be applied to sections
such as different background colors or indent levels for H2 and H3 sections
or to target a certain section type using your own custom JavaScript. 

This extension tags sections hierarchically, meaning a nested element under
multiple parent headers will have current section tag (e.g. H3-section) and
all parent section tags (e.g. H1-section and H2-section).

## Installation

Requires Mediawiki 1.25 or higher for wfLoadExtension registration. Add the
following to LocalSettings.php:

```php
wfLoadExtension( "HeaderSections" );
```

## Configuration

* ext.headersections.css - Edit contents of stylesheet as required. Default
configuration is set to indent each header section by an increasing amount.

Your CSS rules in ext.headersections.css needs to be in the proper order so
that the higher numbered section rules (H4) take precedence over the lower-
numbered section rules (H3).

## Example

An example implementation of HeaderSections with the default CSS implementation can be found here:

https://consolemods.org/wiki/HeaderSections
