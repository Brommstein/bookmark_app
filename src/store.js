//Main class to hold store and server info
import $ from 'jquery';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brommstein/bookmarks';
const store = [];

function getInput() {
    $('.creation').submit(function (event) {
        event.preventDefault();

        let title = $(event.currentTarget).find('#title').val();
        console.log(title);
        let url = $(event.currentTarget).find('#url').val();
        console.log(url);
        let desc = $(event.currentTarget).find('#desc').val();
        console.log(desc);
        //Need to fix rating
        let rating = $(event.currentTarget).find('#rating').val();
        console.log(rating);

        store.push({
            title: title,
            url: url,
            desc: desc,
            rating: rating,
            expanded: false,
            edit: false
        })

        console.log(store);
    });
}


export default {
    store,
    getInput,

}