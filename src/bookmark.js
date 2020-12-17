import render from './renderBookmarks';
import store from './store';
import $ from 'jquery';

// grabs id from the bookmark clicked on
function getExpand() {
    $('.savedBookmarks').on('click keypress', '.collapsed', function (event) {
        //finds id on click
        const position = $(event.currentTarget).data('bookmark-id');
        //changes expanded on click
        let foundMark = store.store.find(store => store.bookmark.id === position);
        foundMark.bookmark.expanded = !foundMark.bookmark.expanded;
        render.renderStoreBookmarks();
    })
}

function getCollapse() {
    $('.savedBookmarks').on('click keypress', '.expanded', function (event) {
        //finds id on click
        const position = $(event.currentTarget).data('bookmark-id');
        //changes expanded on click
        let foundMark = store.store.find(store => store.bookmark.id === position);
        foundMark.bookmark.expanded = !foundMark.bookmark.expanded;
        render.renderStoreBookmarks();
    })
}

export default {
    getExpand,
    getCollapse
}