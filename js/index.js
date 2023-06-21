import getDateString from './date';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'bootstrap';

$(document).ready( () => {
    // Print the current time
    $('.js-content').html( `It's ${ getDateString() }`);

    $('.js-modal').modal({
        show: true,
        keyboard: true
       });
});