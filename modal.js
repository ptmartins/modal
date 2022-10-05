(function(modal) {
    // Do modal stuff here

    let DOM = {

        },

        modifiers = '';
    
        /**
         * Modal default settings
         */
        defaults = {
            type: 'content', // content, confirm, alert, error, image
            size: 'm', // s, m, l
            title: '',
            body: '',
            btnTxt: ''
        },

        /**
         * Modal markup constructor
         */
        modalMarkup = {
            content: () => `
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
            `,
            image: () => `<button class="modal__close modal__close--image"></button>`,
            error: () => `
                <div class="modal__header modal__header--error">
                    <h2 class="modal__title">
                        <span class="modal__icon modal__icon--error"><span>
                        ${defaults.title ? defaults.title : 'Error'}
                    </h2>
                    <button class="modal__close"></button>
                </div>
                <div class="modal__body">
                    ${defaults.body}
                </div>
                <div class="modal__footer">
                    <button class="modal__btn modal__btn--close">
                        ${defaults.btnTxt ? defaults.btnTxt : 'Acknowledge'}
                    </button>
                </div>
            `,
            alert: () => `
                <div class="modal__header modal__header--alert">
                    <h2 class="modal__title">
                        <span class="modal__icon modal__icon--alert"><span>
                        ${defaults.title ? defaults.title : 'Alert'}
                    </h2>
                    <button class="modal__close"></button>
                </div>
                <div class="modal__body">
                    ${defaults.body}
                </div>
                <div class="modal__footer">
                    <button class="modal__btn modal__btn--close">
                        ${defaults.btnTxt ? defaults.btnTxt : 'Ok'}
                    </button>
                </div>
            `
        }

        /**
         * Render the modal
         */
        renderModal = () => {
            DOM.modalOverlay = document.createElement('DIV');
            DOM.modal = document.createElement('DIV');

            DOM.modalOverlay.className = 'modal__overlay';
            DOM.modal.className = (`modal modal--${defaults.type} modal--${defaults.size}`);

            switch(defaults.type) {
                case 'content':
                    DOM.modal.innerHTML = modalMarkup.content();
                    break;
                case 'image':
                    DOM.modal.style.backgroundImage = `url(${defaults.body})`;
                    DOM.modal.innerHTML = modalMarkup.image();
                    break;
                case 'error':
                    DOM.modal.innerHTML = modalMarkup.error();
                    break;
                case 'alert':
                    DOM.modal.innerHTML = modalMarkup.alert();
                    break;
            };

            document.body.append(DOM.modalOverlay, DOM.modal);
            DOM.closeBtn = document.querySelector('.modal__close');
            DOM.cancelBtn = document.querySelector('.modal__btn--close');
        },

        /**
         * Setup event listeners
         */
        setupEvents = () => {
            DOM.closeBtn.addEventListener('click', hide);
            if(DOM.cancelBtn) {
                DOM.cancelBtn.addEventListener('click', hide);
            }
        },

        /**
         * Close the modal
         */
        hide = () => {
            if(document.querySelector('.modal')) {
                DOM.modalOverlay.remove();
                DOM.modal.remove();
            }
        },

        /**
         * Create a new modal
         */
        show = (obj) => {
            if(typeof obj === 'object') {
                // Merge obj with defaults
               for(let key in defaults) {
                     if(obj.hasOwnProperty(key)) {
                          defaults[key] = obj[key];
                     }
               }
            }

            renderModal();
            setupEvents();
        };

    modal.show = show;
    modal.hide = hide;

})(window.modal = window.modal || {});