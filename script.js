const scroller = new Scroll("#main");

document.addEventListener("wheel", (event) => scroller.listenScroll(event));
document.addEventListener('swipeUp', ()=>scroller.scroll(1));
document.addEventListener('swipeDown', ()=>scroller.scroll(-1));
