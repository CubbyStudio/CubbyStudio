## how it works

In theme Shopify Code Editor:

All logic and data is in the single script:

`assets/live_shopify_grip-selector.js`

This script is loaded in `layout/theme.liquid` on any 'grip-selector' templated page.

The script loads the `css/iomic.css` file from this repo, but it does so using `cdn.jsdelivr.net` which caches / serves automatically based off the git repo (but can take hours to update)


## how to add products

- search in grip-selector.js for "*** add new" comments; there are 4 steps
