/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';
import html from './html'
import store from './store'
import $ from 'jquery';

function render() {
    console.log('Starting file');
    $('body').html(html.createHTML);
    $('.creation').html(html.createAddBookmark);
    $('.saved').html(html.createFilter);
    $('.savedBookmarks').html(html.createCollapsedView);
}


function main() {
    render();
    store.getInput();
}

(main);