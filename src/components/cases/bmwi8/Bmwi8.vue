<template>
  <div>
    <section class="landing">
      <h1 class="landing--title">BMW i8</h1>
      <div class="landing--wrapper"></div>
    </section>
    <section class="project">
      <div class="container">
        <div class="project--description">
          <h3 class="project--description--title featureTitle">Le projet</h3>
          <p class="project--description--content featureContent">
            Pour un projet de 3éme année en développement Wordpress, nous avons créé un site web pour présenter la nouvelle BMW i8. Le site dispose d'un configurateur avec une vue à 360 degrés. Tout le contenu du site est également administrable via le back-office.
          </p>
        </div>
        <div class="project--specifications">
          <div class="project--specifications--item">
            <h3 class="project--specifications--item--title featureTitle">Date</h3>
            <p class="project--specifications--item--content featureContent">01/2018</p>
          </div>
          <div class="project--specifications--item">
            <h3 class="project--specifications--item--title featureTitle">Pourquoi</h3>
            <p class="project--specifications--item--content featureContent">Projet d'école</p>
          </div>
          <div class="project--specifications--item">
            <h3 class="project--specifications--item--title featureTitle">Role</h3>
            <p class="project--specifications--item--content featureContent">UX/UI Design<br>Développeur</p>
          </div>
          <div class="project--specifications--item">
            <h3 class="project--specifications--item--title featureTitle">Url</h3>
            <p class="project--specifications--item--content featureContent"><a target="_blank" href="https://bmw.alexisbenoliel.ovh/">bmw.alexisbenoliel.ovh</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="mockup">
      <h2 class="mockup--title">sport & design</h2>
      <img class="mockup--img" :src="'./static/img/bmw-mockup.png'" alt="">
    </section>
    <section class="visuals">
      <img class="visuals--img" :src="'./static/img/bmw-visual.jpg'" alt="">
      <img class="visuals--img" :src="'./static/img/bmw-visual2.jpg'" alt="">
    </section>
    <section class="feature">
      <div class="feature--content">
        <div class="feature--content--title featureTitle">Le configurateur</div>
        <p class="feature--content--txt featureContent">
          Afin d'innover, nous avons réalisé un configurateur dynamique qui permet à l'utilisateur de personnaliser sa BMW i8 et d'en obtenir un devis. le tout entièrement gérable depuis le back-office Wordpress.
        </p>
      </div>
      <video v-if="mobile === false" muted loop class="visuals--img visuals--video" :src="'./static/videos/bmw-video.mp4'" :poster="'./static/img/bmw-poster.jpg'"></video>
      <img v-else class="visuals--img" :src="'./static/img/bmw-poster.jpg'" alt="">
    </section>
    <a href="#" class="nav">
      <h4 class="nav--title">Doctobot</h4>
      <div class="nav--description">
        <p class="nav--description--content">
          Doctobot est un précieux conseiller médical vous permettant d'assurer un suivi 2.0 de votre santé. Présent sous la forme d'un chatbot, celui-ci permet d'assurer le lien avec son médecin en cas de détection de symptômes lors de sa consultation.
        </p>
      </div>
    </a>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/cases/bmwi8/_Bmwi8.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/cases/bmwi8/_Bmwi8.scss" lang="scss" scoped></style>
