const allimages = document.querySelectorAll("source[datasrc]");

const loadImage = image => {
    const src = image.getAttribute("datasrc");
    image.setAttribute("srcset", src);
    // image.parentNode.classList.remove("noview");
    image.parentNode.classList.add("view");
    image.onload = () => {
        image.removeAttribute("datasrc");
    }
};
prefernces = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
}

const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
        if(item.isIntersecting) {
            loadImage(item.target);
            observer.unobserve(item.target);
        }
    })
}, prefernces);

if("IntersectionObserver" in window) {
    allimages.forEach(img => {
        observer.observe(img);
        });
}else {
    allimages.forEach(img => {loadImage(img)});
}