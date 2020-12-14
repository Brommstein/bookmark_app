//Main class to hold store and server info
import html from './html';
import $ from 'jquery';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brommstein/bookmarks';
const store = [];

function getInput() {
    $('.creation').on('submit', function (event) {
        event.preventDefault();

        let title = $(event.currentTarget).find('#title').val();
        let url = $(event.currentTarget).find('#url').val();
        let desc = $(event.currentTarget).find('#desc').val();
        let rating = $(event.currentTarget).find('#rating').val();

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
        }).then((response) => response.json()).then(response => {
            store.push({
                bookmark: {
                    id: response.id,
                    title: response.title,
                    url: response.url,
                    desc: response.desc,
                    rating: response.rating,
                    expanded: false,
                    edit: false
                }
            })
            renderStoreBookmarks();
        })
            .catch(err => console.log(err));
    });
}

function deleteButton() {
    $('.savedBookmarks').on('click', '.delete', e => {
        const position = $(e.currentTarget).closest('.border').find('.expanded').data('bookmark-id');
        console.log(position);
        fetch(`${BASE_URL}/${position}`, {
            method: 'DELETE'
        })
        for (let i = 0; i < store.length; i++) {
            if (store[i].bookmark.id === position) {
                store.splice(i, 1);
            }
        }
        renderStoreBookmarks();
    })
}

function filterChanged(){
    $('document').ready(function(){
        $('#filter').change(function(){
            renderStoreBookmarks();
        })
    })
}

// renders full bookmark list
function renderStoreBookmarks() {
    $('.savedBookmarks').empty();
    const condencedBookmarks = store.map((bookmark) => {
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

// grabs id from the bookmark clicked on
function getExpand() {
    $('.savedBookmarks').on('click', '.collapsed', function (event) {
        //finds id on click
        const position = $(event.currentTarget).data('bookmark-id');
        //changes expanded on click
        let foundMark = store.find(store => store.bookmark.id === position);
        foundMark.bookmark.expanded = !foundMark.bookmark.expanded;
        renderStoreBookmarks();
    })
}

function getCollapse() {
    $('.savedBookmarks').on('click', '.expanded', function (event) {
        //finds id on click
        const position = $(event.currentTarget).data('bookmark-id');
        //changes expanded on click
        let foundMark = store.find(store => store.bookmark.id === position);
        foundMark.bookmark.expanded = !foundMark.bookmark.expanded;
        renderStoreBookmarks();
    })
}


export default {
    store,
    BASE_URL,
    getInput,
    getExpand,
    getCollapse,
    renderStoreBookmarks,
    deleteButton,
    filterChanged
}