import Router from '@/router';

export default {

  name: 'home',
  data: () => ({
    mobile: false,
    return: {
      aboutOpen: false,
      contentItem: null,
      video: null,
      aboutSection: null,
      aboutButton: null,
      aboutButtonTitle: null,
      overlay: null,
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

    openAboutSection() {
      this.aboutSection.style.transform = 'translateY(0)';
      this.aboutSection.classList.add('opening');
      this.aboutButtonTitle.style.right = '23px';
      this.aboutButtonTitle.innerHTML = 'fermer';
      this.overlay.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';
      setTimeout(() => {
        this.overlay.style.opacity = '1';
      }, 10);

      this.aboutOpen = true;
    },

    closeAboutSection() {
      this.aboutSection.style.transform = 'translateY(-100%)';
      this.aboutSection.classList.remove('opening');
      this.aboutButtonTitle.innerHTML = 'info';
      this.aboutButtonTitle.style.right = '-2px';
      this.overlay.style.opacity = '0';
      document.querySelector('body').style.overflow = 'visible';
      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, 300);

      this.aboutOpen = false;
    },

    clickCallBack(e) {
      if (this.aboutOpen) {
        this.closeAboutSection();
      } else {
        this.openAboutSection();
      }

      e.preventDefault();
    },

    init() {
      this.contentItem = document.querySelectorAll('.content--item');
      this.video = document.querySelectorAll('.content--item--video');
      this.aboutSection = document.querySelector('.about');
      this.aboutButton = document.querySelector('.header--works');
      this.aboutButtonTitle = this.aboutButton.querySelector('.header--works--content');
      this.overlay = document.querySelector('.overlay');
      this.wrapper = document.querySelector('.wrapper');
      this.wrapperBackground = document.querySelector('.wrapper--background');
      this.wrappertitle = document.querySelector('.wrapper--title');

      this.video[0].play();
      this.aboutButtonTitle.innerHTML = 'info';
      this.aboutButtonTitle.style.right = '-2px';

      this.isMobileDevice();

      document.addEventListener('scroll', () => {
        for (let i = 0; i < this.contentItem.length; i += 1) {
          const isPlaying = this.video[i].currentTime > 0 && !this.video[i].paused && !this.video[i].ended && this.video[i].readyState > 2;
          if (this.isScrolledIntoView(this.contentItem[i])) {
            this.video[i].play();
          } else if (isPlaying === true) {
            this.video[i].pause();
          }
        }
      });

      this.contentItem[0].addEventListener('click', (e) => {
        this.wrappertitle.innerHTML = 'trilatte 3d';
        this.wrapper.style.height = '100vh';
        this.wrapperBackground.style.background = '#CE854A';
        e.preventDefault();
        setTimeout(() => {
          Router.push({
            path: '/trilatte-3d',
          });
        }, 800);
      });

      this.contentItem[1].addEventListener('click', (e) => {
        this.wrappertitle.innerHTML = 'BMW i8';
        this.wrapper.style.height = '100vh';
        this.wrapperBackground.style.background = '#194DD9';
        e.preventDefault();
        setTimeout(() => {
          Router.push({
            path: '/bmw-i8',
          });
        }, 800);
      });

      this.contentItem[2].addEventListener('click', (e) => {
        this.wrappertitle.innerHTML = 'Doctobot';
        this.wrapper.style.height = '100vh';
        this.wrapperBackground.style.background = '#72e4a7';
        e.preventDefault();
        setTimeout(() => {
          Router.push({
            path: '/doctobot',
          });
        }, 800);
      });

      this.contentItem[3].addEventListener('click', (e) => {
        this.wrappertitle.innerHTML = 'Wise stone';
        this.wrapper.style.height = '100vh';
        this.wrapperBackground.style.background = '#0D0F31';
        e.preventDefault();
        setTimeout(() => {
          Router.push({
            path: '/wise-stone',
          });
        }, 800);
      });

      // toggle about section
      this.aboutButton.addEventListener('click', this.clickCallBack);
      this.overlay.addEventListener('click', this.clickCallBack);
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {
    const aboutButton = document.querySelector('.header--works');
    aboutButton.removeEventListener('click', this.clickCallBack);
  },
};
