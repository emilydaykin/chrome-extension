# Chrome Extension Challenge

## Criteria
A Chrome extension front-end that displays:
  1. a blank search bar on the shortcut (cmd +k) from any webpage, accepts input, and displays a blank card with smaller sub-cards inside it. Those sub-cards should be clickable to direct to a link, e.g. https://www.frontdoor.xyz/, and 
  2. the newly opened page should KEEP showing the blank card in the exact state it was before clicking, meaning it is not a new blank page but the exact previous one imported to the new page.

Specifics:
- Ensure that the shortcut does not conflict with any site that has a pre-existing use for that shortcut, e.g. Gmail (cmd + k is the shortcut for inserting a link while writing an email) - in these instances, give precedence to the web app.
- Once a sub-card is clicked, and the URL opened - the main blank card should remain visible and keep showing on the newly opened URL in the exact state that it was prior to clicking the sub-card. E.g. if the extension was loaded whilst on Twitter and the user clicked on a sub-card from there, taking him to the pre-specified URL - the main blank card of the extension should remain visible on this new page in the same state as it was on Twitter.

## Implementation:
- ReactJS and Sass (BEM) to build and style this extension.
- The `manifest.json` file is the most important file of this application (it records crucial metadata, defins resources, declares permissions and identifies which files to run in the background and on the page. It must be in the root dir)
```json
{
  "manifest_version": 3,
  "name": "Chrome Extension Challenge",
  "description": "React Chrome Extension",
  "version": "1.0",
  "action": {
    "default_popup": "index.html",
    "default_title": "Open"
  },
  "permissions": [
    "scripting",
    "tabs",
    "activeTab",
    "webNavigation"
  ],
  "commands": {
    "run-extension": {
      "suggested_key": {
        "default": "Ctrl+K"
      },
      "description": "Run the extension on current page"
    }
  }
}
```

## Installation:
1. Clone this repo then run:
    1.  `npm install`
    2. `npm run build`
2. Go to Chrome extensions ([chrome://extensions/](chrome://extensions/)) and make sure the 'Developer mode' is toggled ON.
3. Upload the `build` to Chrome Extensions (the `build` folder in this repo that was generated in step 1(ii)).
    - Click "Load unpacked", then select the `build` folder 
4. Pin the extension to the browser to test it out by clicking on it or via `Cmd+K` (or `Ctrl+K`)

### Notes 
- Every time the codebase is updated, relaunch the extension by: 
    - (i) runnning `npm run build`, then
    - (ii) clicking the 'refresh' icon in the chrome extension
- The keyboard shortcut (`Cmd+K`) can be modified in the `manifest.json` `commands`, or manually in the Chrome Extensions ([chrome://extensions/shortcuts](chrome://extensions/shortcuts))

