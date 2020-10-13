class Scroll {
  constructor(main) {
    const mainElement = document.querySelector(main);
    this.sections = document.querySelectorAll(".section");
    const sectionsArr = [...this.sections];
    const sectionIndex = sectionsArr.findIndex((section) =>
      this.isScrolledIntoView(section)
    );
    console.log(sectionIndex);
    this.sectionIndex = sectionIndex < 0 ? 0 : sectionIndex;

    this.isScroll = false;
  }

  isScrolledIntoView = (element) => {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const vissible = elemTop >= 0 && elemBottom <= window.innerHeight;

    return vissible;
  };
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
