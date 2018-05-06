<template>
  <div>
      <header class="header">
        <router-link class="header--logo" to="/">
            <img  :src="'./static/img/logo-w.png'" alt="timothee hatton logo">
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
