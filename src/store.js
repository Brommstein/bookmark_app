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
            },
            expanded: false,
            edit: false
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

function renderStoreBookmarks() {
    $('.savedBookmarks').empty();
    const condencedBookmars = store.map((bookmark) => {
        return html.createCollapsedView(bookmark)
    })
    $('.savedBookmarks').html(condencedBookmars.join('')) ;
}

export default {
    store,
    BASE_URL,
    getInput,
    renderStoreBookmarks

}