import '../index.html';

import getDateString from './date.js';
import '../styles/styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';


$(document).ready( () => {
    // Print the current time
    $('.js-content').html( `It's ${ getDateString() }`);

    $('.js-modal').modal({
        show: true,
        keyboard: true
       });
});