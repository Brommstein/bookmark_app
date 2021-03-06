/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';
import html from './html'
import store from './store'
import bookmarkMod from './bookmark';
import renderB from './renderBookmarks';
import './index.css'
import $ from 'jquery';

function render() {
    $('body').html(html.createHTML);
    $('.creation').html(html.createAddBookmark);
    $('.saved').html(html.createFilter);
    $('.savedBookmarks').html(renderB.renderStoreBookmarks);
}
 
function main() {
    //Pulls info from server and stores into STORE
    fetch(store.BASE_URL, {
        method: 'GET'
    }).then((response) => {
        if (response.status >= 200 && response.status <= 299) {
            $('.failedCreation').empty();
            return response.json()
        } else {
            throw Error(response.statusText);
        }
    })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                store.store.push({
                    bookmark: {
                        id: json[i].id,
                        title: json[i].title,
                        url: json[i].url,
                        desc: json[i].desc,
                        rating: json[i].rating,
                        expanded: false,
                        edit: false
                    },
                })
            };
        }).catch((error) => {
            console.log(error);
        }).then(() => render())
        .then(() => {
            store.getInput()
            bookmarkMod.getExpand()
            bookmarkMod.getCollapse()
            bookmarkMod.deleteButton()
            bookmarkMod.filterChanged()
        })
        .catch(err => console.log(err));
}

$(main);