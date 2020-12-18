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

function deleteButton() {
    $('.savedBookmarks').on('click', '.delete', e => {
        const position = $(e.currentTarget).closest('.border').find('.expanded').data('bookmark-id');
        fetch(`${store.BASE_URL}/${position}`, {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                throw response
            }
            for (let i = 0; i < store.store.length; i++) {
                if (store.store[i].bookmark.id === position) {
                    store.store.splice(i, 1);
                    
                }
            }
            console.log('rerendering map')
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
    getExpand,
    getCollapse,
    deleteButton,
    filterChanged
}