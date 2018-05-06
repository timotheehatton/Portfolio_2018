export default {
  name: 'home',
  methods: {
    endloadIng() {
      this.endload = true;
    },
    init() {
      const contentItem = document.querySelectorAll('.content--item');
      const video = document.querySelectorAll('.content--item--video');

      const isScrolledIntoView = (element) => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = (elemTop >= -250) && (elemBottom <= window.innerHeight + 250);

        return isVisible;
      };

      video[0].play();

      document.addEventListener('scroll', () => {
        for (let i = 0; i < contentItem.length; i += 1) {
          if (isScrolledIntoView(contentItem[i])) {
            video[i].play();
          } else {
            video[i].pause();
          }
        }
      });

      /* global ScrollReveal sr */
      window.sr = ScrollReveal();

      sr.reveal('.content--item');
    },
  },
  mounted() {
    this.init();
  },
};
