export default {
  name: 'headerNav',
  methods: {
    endloadIng() {
      this.endload = true;
    },
    init() {
      const aboutSection = document.querySelector('.about');
      const aboutButton = document.querySelector('.header--works');
      const aboutButtonTitle = aboutButton.querySelector('.header--works--content');
      const overlay = document.querySelector('.overlay');

      let aboutOpen = false;

      const openAboutSection = () => {
        aboutSection.style.transform = 'translateY(0)';
        aboutSection.classList.add('opening');
        aboutButtonTitle.style.right = '23px';
        aboutButtonTitle.innerHTML = 'fermer';
        overlay.style.display = 'block';
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 1);
        aboutOpen = true;
      };

      const closeAboutSection = () => {
        aboutSection.style.transform = 'translateY(-100%)';
        aboutSection.classList.remove('opening');
        aboutButtonTitle.innerHTML = 'info';
        aboutButtonTitle.style.right = '-2px';
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
        aboutOpen = false;
      };

      aboutButton.addEventListener('click', () => {
        if (aboutOpen) {
          closeAboutSection();
        } else {
          openAboutSection();
        }
      });
      overlay.addEventListener('click', () => {
        closeAboutSection();
      });
    },
  },
  mounted() {
    this.init();
  },
};
