window.onscroll = function() {
    changeOnScroll()
}

function changeOnScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav").className = "onScroll"
    } else {
        document.querySelector("nav").className = ""
    }
}
