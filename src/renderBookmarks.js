import html from './html';
import store from './store';
import $ from 'jquery';

// renders full bookmark list
function renderStoreBookmarks() {
    $('.savedBookmarks').empty();
    const condencedBookmarks = store.store.map((bookmark) => {
        return renderBookmark(bookmark);
    })

    $('.savedBookmarks').html(condencedBookmarks.join(''));
}

// Need to work on this section
function renderBookmark(bookmark) {
    if (bookmark.bookmark.rating >= $('#filter').val()) {
        if (bookmark.bookmark.expanded === true) {
            return html.createFullView(bookmark);
        }
        if (bookmark.bookmark.expanded === false) {
            return html.createCollapsedView(bookmark);
        }
    }
}

export default {
    renderStoreBookmarks
}