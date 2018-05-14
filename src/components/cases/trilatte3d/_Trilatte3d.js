import Router from '@/router';

export default {
  name: 'trilatte3d',
  data: () => ({
    mobile: false,
    return: {
      closeButton: null,
      closeButtonTitle: null,
    },
  }),
  methods: {
    endloadIng() {
      this.endload = true;
    },

    isMobileDevice() {
      if (window.innerWidth <= 700) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },

    isScrolledIntoView(element) {
      const rect = element.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      const isVisible = (elemTop >= -250) && (elemBottom <= window.innerHeight + 250);

      return isVisible;
    },

    init() {
      this.aboutButton = document.querySelector('.header--works');
      this.navSection = document.querySelector('.nav');
      this.aboutButtonTitle = this.aboutButton.querySelector('.header--works--content');
      this.landingWrapper = document.querySelector('.landing--wrapper');
      this.video = document.querySelector('.visuals--video');

      this.aboutButtonTitle.innerHTML = 'Fermer';
      this.aboutButtonTitle.style.right = '23px';

      this.isMobileDevice();

      setTimeout(() => {
        this.landingWrapper.style.height = '0';
      }, 100);


      this.aboutButton.addEventListener('click', () => {
        this.aboutButton.classList.add('active');
        Router.push({
          path: '/',
        });
      });

      this.navSection.addEventListener('click', (e) => {
        this.navSection.classList.add('nav-active');
        e.preventDefault();
        setTimeout(() => {
          Router.push({
            path: '/bmw-i8',
          });
        }, 800);
      });

      // play video on scroll
      document.addEventListener('scroll', () => {
        if (this.isScrolledIntoView(this.video)) {
          this.video.play();
        } else {
          this.video.pause();
        }
      });

      /* global ScrollReveal sr */
      window.sr = ScrollReveal();

      sr.reveal('.project--description', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.project--specifications', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.mockup--img', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.visuals--img', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.feature--content', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.feature--img', {
        scale: 1,
        distance: '50px',
      });
      sr.reveal('.nav--item--description', {
        scale: 1,
        distance: '50px',
      });
    },
  },
  mounted() {
    this.init();
  },
};
