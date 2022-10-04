(function(modal) {
    // Do modal stuff here

    let DOM = {

        },
    
        defaults = {
            type: 'confirm', // confirm, alert, delete, error
            size: 'standard', // small, standard, large
            title: '',
            body: '',
        },

        modifiers = '';

        addModifiers = () => {
            switch(defaults.type) {
                case 'confirm': 
                    modifiers = 'modal--confirm';
                    break;
                case 'alert':
                    modifiers = 'modal--alert';
                    break;
                case 'delete':
                    modifiers = 'modal--delete';
                    break;
                case 'error':
                    modifiers = 'modal--error';
                    break;
            }
        }

        renderModal = () => {
            DOM.modalOverlay = document.createElement('DIV');
            DOM.modal = document.createElement('DIV');

            DOM.modalOverlay.className = 'modal__overlay';
            DOM.modal.className = (`modal ${modifiers}`);

            DOM.modal.innerHTML = `
                <div class="modal__header">
                    <h2 class="modal__title">${defaults.title}</h2>
                    <button class="modal__close"></button>
                </div>
                <div class="modal__body">
                    ${defaults.body}
                </div>
                <div class="modal__footer">
                    <button class="modal__btn modal__btn--close">Close</button>
                </div>
            `;

            document.body.append(DOM.modalOverlay, DOM.modal);

            DOM.closeBtn = document.querySelector('.modal__close');

            DOM.closeBtn.addEventListener('click', close);
        },

        close = () => {
            if(document.querySelector('.modal')) {
                DOM.modalOverlay.remove();
                DOM.modal.remove();
            }
        },

        create = (obj) => {
            if(typeof obj === 'object') {
                // Merge obj with defaults
               for(let key in defaults) {
                     if(obj.hasOwnProperty(key)) {
                          defaults[key] = obj[key];
                     }
               }
            }

            addModifiers();
            renderModal();
        };

    modal.create = create;
    modal.close = close;

})(window.modal = window.modal || {});