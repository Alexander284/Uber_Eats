/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/authorization.js":
/*!*************************************!*\
  !*** ./js/modules/authorization.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeWindowModal": () => (/* binding */ closeWindowModal),
/* harmony export */   "openWindowModal": () => (/* binding */ openWindowModal)
/* harmony export */ });
function openWindowModal(modalSelector) {
    const modal =  document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
function closeWindowModal(modalSelector) {
    const modal =  document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function authorization(triggerSelector, modalSelector) {

    const btnLog = document.querySelector(triggerSelector),
          modal = document.querySelector(modalSelector);

    btnLog.addEventListener('click', () => openWindowModal(modalSelector));

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')){
            closeWindowModal(modalSelector);
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal){
            closeWindowModal(modalSelector);
        }
    });

    // function showModalByScroll() {
    //     if (window.pageYOffset + document.documentElement.clientHeight >=
    //         document.documentElement.scrollHeight){
    //             openWindowModal();
    //             window.removeEventListener('scroll', showModalByScroll);
    //         }
    // }
    // window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authorization);


/***/ }),

/***/ "./js/modules/buttonUp.js":
/*!********************************!*\
  !*** ./js/modules/buttonUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buttonUp(buttonSelector) {

    const btn = document.querySelector(buttonSelector);

    function scrollFunction() {
        if (document.documentElement.scrollTop > 20) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', scrollFunction);

    btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonUp);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization */ "./js/modules/authorization.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formsSelector) {

    const forms = document.querySelectorAll(formsSelector);

    const message = {
        success: 'Вы авторизовались',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showthinksModal(message.success);
                form.reset();
            }).catch(() =>{
                showthinksModal(message.failure);
            }).finally(() =>{
                form.reset();
            })
        });
    }

    function showthinksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        
        prevModalDialog.classList.add('hide');
        (0,_authorization__WEBPACK_IMPORTED_MODULE_0__.openWindowModal)('.modal');

        const thinksModal = document.createElement('div');
        thinksModal.classList.add('modal__dialog');
        thinksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thinksModal);
        setTimeout(() => {
            thinksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_authorization__WEBPACK_IMPORTED_MODULE_0__.closeWindowModal)('.modal');
        }, 4000);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
    });
    return await res.json();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/authorization */ "./js/modules/authorization.js");
/* harmony import */ var _modules_buttonUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buttonUp */ "./js/modules/buttonUp.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");





window.addEventListener('DOMContentLoaded', () => {
    
    (0,_modules_authorization__WEBPACK_IMPORTED_MODULE_0__.default)('.autho', '.modal');
    (0,_modules_buttonUp__WEBPACK_IMPORTED_MODULE_1__.default)('#btn');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__.default)('.modal form');    

});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map