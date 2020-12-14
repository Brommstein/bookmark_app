//Class that creates pure html content

function createHTML() {
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
    <label for="filter">Minimum rating</label>
    <select name="filter" id="filter">
        <option value="1" selected>★☆☆☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="3">★★★☆☆</option>
        <option value="4">★★★★☆</option>
        <option value="5">★★★★★</option>
    </select>
    <br><br>`
}

function createCollapsedView(bookmark) {
    return `<section class="border">
    <div id="flexbox" class="collapsed" data-bookmark-id="${bookmark.bookmark.id}">
        <p id="itemOne">${bookmark.bookmark.title}</p>
        <p id="itemOne">${bookmark.bookmark.rating}</p>
    </div>
</section>
<br>`
} 

function createFullView(bookmark) {
    return `<section class="border">
    <div id="flexbox" class="expanded" data-bookmark-id="${bookmark.bookmark.id}">
        <p id="itemOne">${bookmark.bookmark.title}</p>
        <p id="itemOne">${bookmark.bookmark.rating}</p>
    </div>
    <div id="bookmarkInfo">
        <br>
        <div id="flexbox">
            <button type="button" id="itemOne"><a href="${bookmark.bookmark.url}" target="_blank">${bookmark.bookmark.title}</a></button>
            <button type="button" id="itemOne" class="delete">Delete</button>
        </div>
        <p>${bookmark.bookmark.desc}</p>
    </div>
</section>
<br>`
}

export default {
    createHTML,
    createAddBookmark,
    createFilter,
    createCollapsedView,
    createFullView
}