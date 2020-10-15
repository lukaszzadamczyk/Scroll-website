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

    this.changeNavigation();
  }

  isScrolledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const vissible = elemTop >= 0 && elemBottom <= window.innerHeight;

    return vissible;
  };
  listenScroll(event){
    if (this.isScroll) return;
    this.isScroll = true;

    setTimeout(() => {
      this.isScroll = false;
    }, 1000);

    const direction = event.deltaY > 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll(direction){
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

  scrollToCurrentSection() {
    this.selectActiveNav();
    this.sections[this.sectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  changeNavigation() {
    this.navigation = document.createElement("aside");
    this.navigation.setAttribute("class", "nav");
    const list = document.createElement("ul");
    list.setAttribute("class", "nav__list");

    this.sections.forEach((section, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "nav__listItem");

      listItem.addEventListener("click", () => {
        this.sectionIndex = index;

        this.scrollToCurrentSection();
      });

      list.appendChild(listItem);
    });
    this.navigation.appendChild(list);
    document.body.appendChild(this.navigation);

    this.selectActiveNav();
  };

  selectActiveNav(){
    if (this.navigation) {
      const navigation = this.navigation.querySelectorAll("li");

      navigation.forEach((listItem, index) => {
        if (index === this.sectionIndex) {
          listItem.classList.add("nav__listItem--active");
        } else {
          listItem.classList.remove("nav__listItem--active");
        }
      });
    }
  };
}
