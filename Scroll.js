class Scroll {
  constructor(main) {
    const mainElement = document.querySelector(main);
    this.sections = document.querySelectorAll(".section");
    this.sectionIndex = 0;
    this.isScroll = false;
  }

  listenScroll = (event) => {
    if (this.isScroll) return;
    this.isScroll = true;

    setTimeout(() => {
      this.isScroll = false;
    }, 1000);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection = this.sectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.sectionIndex === 0;
      if (isFirstSection) return;
    }

    this.sectionIndex = this.sectionIndex + direction;
    this.scrollToCurrentSection();
  };

  scrollToCurrentSection = () => {
    this.sections[this.sectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}
