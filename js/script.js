'use strict';
import authorization from './modules/authorization';
import buttonUp from './modules/buttonUp';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    
    authorization();
    buttonUp();
    forms();    

});
