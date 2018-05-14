<template>
  <div>
      <header class="header">
        <router-link class="header--logo" to="/">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="A4-Copy-6" class="header--logo--bg" transform="translate(-40.000000, -30.000000)" fill="#ffffff">
                        <g id="Group-2" transform="translate(40.000000, 30.000000)">
                            <path d="M2,0 L22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 2.09738034e-15,23.1045695 0,22 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M15.6564109,6.46030735 L11.8203674,10.2701149 L13.2163337,11.6407881 L16.9773644,7.85808424 L19.1470391,9.97643088 L20.3033009,8.85355339 L14.6438161,3.19932962 L13.516735,4.32838797 L15.6564109,6.46030735 Z M6.46540531,15.2441717 L4.28218968,13.0609561 L3.05025253,14.2928932 L8.70710678,19.9497475 L9.93904393,18.7178103 L7.60577911,16.3845455 L9.3845455,14.6057791 L11.7178103,16.9390439 L12.9497475,15.7071068 L7.29289322,10.0502525 L6.06095607,11.2821897 L8.2441717,13.4654053 L6.46540531,15.2441717 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </router-link>
        <a class="header--works" href="#">
            <div class="header--works--lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="header--works--content">Info</div>
        </a>
    </header>
    <div class="overlay"></div>
    <section class="about">
        <div class="about--content">
            <div class="about--content--item">
                <span class="about--content--item--title">Je m’appelle</span>
                <span class="about--content--item--bold">Timothee HATTON</span>
            </div>
            <div class="about--content--item">
                <p class="about--content--item--description">
                    Etudiant en 3ème année à HETIC, passionné par le web, je recherche un stage de SEO/SEA et/ou de développement Web Front, de juillet à septembre. Pragmatique, curieux et créatif, j’aurais plaisir à apprendre à vos côtés tout en apportant ma contribution à vos réalisations.
                </p>
            </div>
            <div class="about--content--item">
                <a class="about--content--item--link" href="mailto:timothee.hatton@gmail.com">Email</a>
                <a class="about--content--item--link" target="_blank" href="https://www.linkedin.com/in/timotheehatton">Linkedin</a>
                <a class="about--content--item--link" target="_blank" href="https://github.com/timotheehatton">Github</a>
                <a class="about--content--item--link" target="_blank" href="./assets/img/timothee-hatton-cv.pdf">Mon CV</a>
            </div>
        </div>
    </section>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/partials/header/_Header.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/partials/header/_Header.scss" lang="scss" scoped></style>
