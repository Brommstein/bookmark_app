//Class that creates pure html content
import store from './store.js'

function createHTML(){
    return `<header>
    <h1>My Bookmarks App</h1>
    </header><br>
    <main>
    <div class="creation"></div>
    <div class="saved"></div>
    <div class="savedBookmarks"></div>
    </main><br>
    <footer>
    <p>Created by Ryan Conley</p>
    </footer>`
}

function createAddBookmark() {
    return `<div class="border">
    <h2>Lets add a bookmark!</h2>
    <form id="bookmark">
        <label for="title">Name of bookmark: </label>
        <input type="text" id="title" name="title" required>
        <br><br>
        <label for="url">Link for bookmark: </label>
        <input type="text" id="url" name="url" required>
        <br><br>
        <label for="desc">Description of bookmark: </label>
        <textarea type="text" id="desc" name="desc" required></textarea>
        <br><br>
        <label for="rating">Rating for this bookmark: </label>
        <select name="rating" id="rating">
            <option value="noRating" selected>☆☆☆☆☆</option>
            <option value="oneStar">★☆☆☆☆</option>
            <option value="twoStar">★★☆☆☆</option>
            <option value="threeStar">★★★☆☆</option>
            <option value="fourStar">★★★★☆</option>
            <option value="fiveStar">★★★★★</option>
        </select>
        <button id="submit" type="submit">Submit</button>
    </form>
</div>
        <br>
        `
}

function createFilter() {
    return `<h3>Saved bookmarks</h3>
    <!--Filter list with dropdown-->
    <select name="filter">
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="h-l">Highest-Lowest</option>
        <option value="l-h">Lowest-Highest</option>
    </select>
    <br><br>`
}

function createCollapsedView() {
    return `<section class="border">
    <div id="flexbox">
        <p id="itemOne">Sample Bookmark</p>
        <p id="itemOne">★★★★☆</p>
    </div>
</section>`
}

function createFullView() {
    return `<section class="border">
    <div id="flexbox" class="border">
        <p id="itemTwo">Sample Bookmark</p>
        <!--Able to remove bookmarks-->
        <button id="itemOne" class="edit">Edit</button>
        <button id="itemOne" class="delete">Delete</button>
    </div>
    <div id="bookmarkInfo">
        <br>
        <div id="flexbox">
            <button id="itemOne" class="link">Link</button>
            <p id="itemOne">★★★★☆</p>
        </div>
        <p>Sample text for the bookmark... It was a scrape that he hardly noticed.
            Sure, there was a bit of blood but it was minor compared to most of the
            other cuts and bruises he acquired on his adventures. There was no
            way he could know that the rock that produced the cut had alien
            genetic material on it that was now racing through his bloodstream.
            He felt perfectly normal and continued his adventure with no
            knowledge of what was about to happen to him.</p>
    </div>
</section>`
}

export default {
    createHTML,
    createAddBookmark,
    createFilter,
    createCollapsedView,
    createFullView
}