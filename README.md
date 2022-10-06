## MODAL - Javascript Module
----------------------------

Simple javascript module to create modal windows. 
It can be used to generate diferent types of modals: alert, error, confirm, image or just plain content with a few lines of code.

## Setup
- Add modal.css in your `<head>`.
- Add slick.js before your closing `<body>` tag.

## Usage
Initialize the modal in your script file or an inline script tag.

    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit.';

    modal.show({
        body: text
    });


## Settings
- `body` (*type String*)
    - *Required*. 
    - Text to be displayed in the modal body.
- `btnTxt` (*type String*)
    - *Optional*. 
    - Text to be displayed in the modal button.
- `position` (*type String*)
    - *Optional*. 
    - Modal position: `'default'` (by default) or `'centered'`.
- `size` (*type String*)
    - *Optional*. 
    - Sets modal sizes: `'m'` (by default), `'s'` and `'l'`.
- `title` (*type String*)
    - *Optional*. 
    - Text to be displayed in the modal title.
- `type` (*type String*)
    - *Optional*. 
    - Types of Modal: `'content'` (by default), `'error'`, `'warning'`, `'image'`.

## Public methods
- To initialize the modal

    ```modal.show();```
- To remove the modal. Should be usend inside a callback function like the one passed on `defaults.cbFn`

    ```modal.hide();```