<template>
  <div>
    <section class="landing">
    <h1 class="landing--title">Trilatte 3d</h1>
  </section>
  <section class="project">
    <div class="container">
      <div class="project--description">
        <h3 class="project--description--title featureTitle">Le projet</h3>
        <p class="project--description--content featureContent">
          Pour un projet en freelance, j'ai eu pour mission de réaliser une web application de configuration "nouvelle génération", permettant de personnaliser l'intérieur d'une pièce avec les panneaux de toiture Trilatte 3D. L'application devait être compatible VR.
        </p>
      </div>
      <div class="project--specifications">
        <div class="project--specifications--item">
          <h3 class="project--specifications--item--title featureTitle">Date</h3>
          <p class="project--specifications--item--content featureContent">01/2018</p>
        </div>
        <div class="project--specifications--item">
          <h3 class="project--specifications--item--title featureTitle">Pourquoi</h3>
          <p class="project--specifications--item--content featureContent">Projet freelance</p>
        </div>
        <div class="project--specifications--item">
          <h3 class="project--specifications--item--title featureTitle">Role</h3>
          <p class="project--specifications--item--content featureContent">UX/UI Design<br>Lead Développeur</p>
        </div>
        <div class="project--specifications--item">
          <h3 class="project--specifications--item--title featureTitle">Url</h3>
          <p class="project--specifications--item--content featureContent"><a target="_blank" href="https://trilatte3d.fr/configurateur-3d">trilatte3d.fr/configurateur-3d</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="mockup">
    <h2 class="mockup--title">Configurateur</h2>
    <img class="mockup--img" :src="'./static/img/trilatte-mockup.png'" alt="">
  </section>
  <section class="visuals">
    <video muted loop class="visuals--img visuals--video" :src="'./static/videos/trilatte-video.mp4'" ></video>
    <img class="visuals--img" :src="'./static/img/trilatte-visual.jpg'" alt="">
  </section>
  <section class="feature">
    <div class="feature--content">
      <div class="feature--content--title featureTitle">Compatibilité WebVR</div>
      <p class="feature--content--txt featureContent">
        La demande principale du client était de rendre l'application compatible avec un casque de réalité virtuel (google card board). L'application a donc était fortement optimisée pour les mobiles, et rendu compatible à la norme WebVR pour une parfaite expérience.
      </p>
    </div>
    <img :src="'./static/img/trillate-vr.png'" alt="" class="feature--img">
  </section>
  <router-link to="bmw-i8" class="nav">
    <div class="nav--item">
      <h4 class="nav--item--title">BMW i8</h4>
      <p class="nav--item--description">
        Pour un projet de 3éme année en développement Wordpress, nous avons créé un site web pour présenter la nouvelle BMW i8. Le site dispose d'un configurateur avec une vue à 360 degrés. Tout le contenu du site est également administrable via le back-office.
      </p>
    </div>
  </router-link>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/cases/trilatte3d/_Trilatte3d.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/cases/trilatte3d/_Trilatte3d.scss" lang="scss" scoped></style>