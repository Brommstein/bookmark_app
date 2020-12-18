import html from './html';
import store from './store';
import $ from 'jquery';

// renders full bookmark list
function renderStoreBookmarks() {
    let idx = 4;
    console.log('about to map')
    $('.savedBookmarks').empty();
    const condencedBookmarks = store.store.map((bookmark) => {
        return renderBookmark(bookmark, idx);
    })
    console.log('joining map')
    $('.savedBookmarks').html(condencedBookmarks.join(''));
}
 
// Need to work on this section
function renderBookmark(bookmark, idx) {
    idx += 3;
    if (bookmark.bookmark.rating >= $('#filter').val()) {
        if (bookmark.bookmark.expanded === true) {
            return html.createFullView(bookmark, idx);
        }
        if (bookmark.bookmark.expanded === false) {
            return html.createCollapsedView(bookmark, idx);
        }
    }
}

export default {
    renderStoreBookmarks
}