export default {
  name: 'headerNav',
  methods: {
    changeContrastElement() {
      this.rectBegin = document.querySelector('.project').getBoundingClientRect();
      this.rectEnd = document.querySelector('.mockup').getBoundingClientRect();
      this.header = document.querySelector('.header');
      if (this.rectBegin.top <= 0 && this.rectEnd.bottom >= 0) {
        this.header.classList.add('header-dark');
      } else {
        this.header.classList.remove('header-dark');
      }
    },

    endloadIng() {
      this.endload = true;
    },
    init() {
      document.addEventListener('scroll', () => {
        if (this.$route.path !== '/') {
          this.changeContrastElement();
        } else {
          document.querySelector('.header').classList.remove('header-dark');
        }
      });
    },
  },
  mounted() {
    this.init();
  },
};
