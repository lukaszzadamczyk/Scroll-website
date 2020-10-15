const scroller = new Scroll("#main");

document.addEventListener("wheel", (event) => scroller.listenScroll(event));
