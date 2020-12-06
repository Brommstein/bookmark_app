//Main class to hold store and server info
import html from './html';
import $ from 'jquery';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brommstein/bookmarks';
const store = [];

function getInput() {
    $('.creation').submit(function (event) {
        event.preventDefault();

        let title = $(event.currentTarget).find('#title').val();
        let url = $(event.currentTarget).find('#url').val();
        let desc = $(event.currentTarget).find('#desc').val();
        let rating = $(event.currentTarget).find('#rating').val();

        store.push({
            bookmark: {
                key: '',
                title: title,
                url: url,
                desc: desc,
                rating: rating,
                expanded: false,
                edit: false
            },
        })

        //Sends input to server
        const pass = JSON.stringify({
            title: title,
            url: url,
            desc: desc,
            rating: rating
        });

        fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: pass
        }).then((response) => response.json())
            //.then((json) => {console.log(json);})
            .catch(err => console.log(err));

        renderStoreBookmarks(); //need to be changed
    });
}

// renders full bookmark list
function renderStoreBookmarks() {
    $('.savedBookmarks').empty();
    const condencedBookmarks = store.map((bookmark) => {
        console.log('ran renderStoreBookmarks')
        return html.createCollapsedView(bookmark);
    })

    $('.savedBookmarks').html(condencedBookmarks.join(''));
}

// Need to work on this section
function renderBookmark(bookmark) {
    if (bookmark.expanded === true) {
        console.log('true')
        html.createFullView(bookmark);
    }
    if (bookmark.expanded === false) {
        console.log('false')
        html.createCollapsedView(bookmark);
    }
}

// grabs id from the bookmark clicked on
function getExpandCollapse() {
    $('.savedBookmarks').on('click', '.collapsed', function (event) {
        const position = $(event.currentTarget).data('bookmark-id');
        console.log(position);
    })
}



export default {
    store,
    BASE_URL,
    getInput,
    getExpandCollapse,
    renderStoreBookmarks,


}