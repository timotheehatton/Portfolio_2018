export default {
  name: 'doctobot',
  methods: {
    endloadIng() {
      this.endload = true;
    },
    init() {
      /* global ScrollReveal sr */
      window.sr = ScrollReveal();

      sr.reveal('.project--description');
      sr.reveal('.project--specifications');
      sr.reveal('.mockup--img');
      sr.reveal('.visuals--img');
      sr.reveal('.feature--content');
      sr.reveal('.feature--img');
      sr.reveal('.nav--item--description');
    },
  },
  mounted() {
    this.init();
  },
};
