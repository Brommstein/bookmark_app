//Class that creates pure html content

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
            <option value="1" selected>★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
        </select>
        <button id="submit" type="submit">Submit</button>
    </form>
</div>
        <br>
        `
}

function createFilter() {
    return `<h3>Saved bookmarks</h3>
    <select name="filter">
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="h-l">Highest-Lowest</option>
        <option value="l-h">Lowest-Highest</option>
    </select>
    <br><br>`
}

function createCollapsedView(bookmarks) {
    return `<section class="border">
    <div id="flexbox">
        <p id="itemOne">${bookmarks.bookmark.title}</p>
        <p id="itemOne">${bookmarks.bookmark.rating}</p>
        <button type="button">Expand</button>
    </div>
</section>
<br>`
}

function createFullView(bookmarks) { 
    return `<section class="border">
    <div id="flexbox" class="border">
        <p id="itemTwo">${bookmarks.bookmark.title}</p>
        <button id="itemOne" class="edit">Edit</button>
        <button id="itemOne" class="delete">Delete</button>
    </div>
    <div id="bookmarkInfo">
        <br>
        <div id="flexbox">
            <button type="button" id="itemOne" class="link">Link</button>
            <p id="itemOne">${bookmarks.bookmark.rating}</p>
        </div>
        <p>${bookmarks.bookmark.desc}</p>
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