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
    - If modal type is of type `'image'`, pass the image URL here
- `btnTxt` (*type String*)
    - *Optional*. 
    - Text to be displayed for the modal footer 2nd button.
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
    - Types of Modal: `'content'` (by default), `'error'`, `'warning'`, `'image'` and `'confirm'`.

## Public methods
- To initialize the modal

    ```javascript
        modal.show();
    ```
- To remove the modal. Should be usend inside a callback function like the one passed on `defaults.cbFn`

    ```javascript 
        modal.hide();
    ```

## Examples
> ### Simple modal
```javascript   
    modal.show({
        body: 'Lorem ipsum ...' // Text to show on modal body, here!
    })
```
> ### Simple modal, vertically centered ##
```javascript   
    modal.show({
        body: 'Lorem ipsum ...', // Text to show on modal body, here!
        position: 'centered'
    })
```
> ### Image modal
```javascript   
    modal.show({
        body: 'https://res.cloudinary.com/snitramordep/image/upload/v1605607014/619d6126df65bc5e359468578591a942.jpg', // Image URL
        type: 'image'
    })
```
> ### Error modal
```javascript   
    modal.show({
        body: 'Lorem ipsum ...', // Error message, here!
        type: 'error'
    })
```
> ### Warning modal
```javascript   
    modal.show({
        body: 'Lorem ipsum ...', // Warning message, here!
        type: 'warning'
    })
```
> ### Confirm modal
```javascript   
    modal.show({
        body: 'Lorem ipsum ...', // Confirm message, here!
        type: 'confirm',
        btnTxt: // Confirm button text
        cbFn: () => { 
            // do something here 
        }
    })
```