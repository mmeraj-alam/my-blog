document.addEventListener('DOMContentLoaded', function() {
    const articleTitle = document.querySelector('article h2');
    articleTitle.addEventListener('click', function() {
        alert('You clicked the blog post title!');
    });
});