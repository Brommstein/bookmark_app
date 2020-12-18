//Main class to hold store and server info
import render from './renderBookmarks';
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
        }).then((response) => {
            console.log()
            if (!response.ok) {
                throw response
            }
            return response.json()
        })
            .then(response => {
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
                render.renderStoreBookmarks();
            })
            .catch(err => {
                console.log('Failed to submit')
                $('.failedCreation').append(
                    $(`<p class="border">Failed to add data from server!</p>`)
                )
                console.log(err)
            });
    });
}

function deleteButton() {
    $('.savedBookmarks').on('click', '.delete', e => {
        const position = $(e.currentTarget).closest('.border').find('.expanded').data('bookmark-id');
        fetch(`${BASE_URL}/${position}`, {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                $('.failedCreation').append(
                    $(`<p class="border">Failed to delete data from server!</p>`)
                )
                throw response
            }
            for (let i = 0; i < store.length; i++) {
                if (store[i].bookmark.id === position) {
                    store.splice(i, 1);
                }
            }
            render.renderStoreBookmarks();
        }).catch(err => {
            console.log('Failed to submit')
            $('.failedCreation').append(
                $(`<p class="border">Failed to delete data from server!</p>`)
            )
            console.log(err)
        });
    })
}

function filterChanged() {
    $('document').ready(function () {
        $('#filter').change(function () {
            render.renderStoreBookmarks();
        })
    })
}

export default {
    store,
    BASE_URL,
    getInput,
    deleteButton,
    filterChanged
}