//blog flip//

const blog = document.querySelector(".blog-post-inner");

blog.addEventListener("click", function(e) {
    blog.classList.toggle("is-flipped");
});