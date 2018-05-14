<template>
  <div>
    <section class="landing">
      <h1 class="landing--title">Wise stone</h1>
      <div class="landing--wrapper"></div>
    </section>
    <section class="project">
      <div class="container">
        <div class="project--description">
          <h3 class="project--description--title featureTitle">Le projet</h3>
          <p class="project--description--content featureContent">
            Pour un projet freelance encadré par l'école, nous avons créé un site web pour le chasseur immobilier Wise Stone. Le site est développé sur le CMS Wordpress et dispose d'un formulaire dynamique permettant de renseigner son projet immobilier.
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
            <p class="project--specifications--item--content featureContent"><a target="_blank" href="https://trilatte3d.fr/configurateur-3d">github/wisestone</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="mockup">
      <h2 class="mockup--title">Corporate</h2>
      <img class="mockup--img" :src="'./static/img/wisestone-mockup.png'" alt="">
    </section>
    <section class="visuals">
      <video v-if="mobile === false" muted loop class="visuals--img visuals--video" :src="'./static/videos/wisestone-video.mp4'" :poster="'./static/img/wisestone-poster.jpg'"></video>
      <img v-else class="visuals--img" :src="'./static/img/wisestone-poster.jpg'" alt="">
      <img class="visuals--img" :src="'./static/img/wisestone-visual.jpg'" alt="">
    </section>
    <section class="feature">
      <div class="feature--content">
        <div class="feature--content--title featureTitle">Formulaire dynamique</div>
        <p class="feature--content--txt featureContent">
          L'objetif de ce formulaire dynamique était de donner la possibilité au prospect de décrire son projet de manière simple et ludique grâce à des illustrations et animations. Le résultat du formulaire est disponible dans le back-office du site et est envoyé par mail aux collaborateurs de Wise Stone.
        </p>
      </div>
      <img :src="'./static/img/wisestone-feature.png'" alt="" class="visuals--img">
    </section>
    <a href="#" class="nav">
      <h4 class="nav--title">Trilatte 3d</h4>
      <div class="nav--description">
        <p class="nav--description--content">
          Pour un projet en freelance, j'ai eu pour mission de réaliser une web application de configuration "nouvelle génération", permettant de personnaliser l'intérieur d'une pièce avec les panneaux de toiture Trilatte 3D. L'application devait être compatible VR.
        </p>
      </div>
    </a>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/cases/wisestone/_Wisestone.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/cases/wisestone/_Wisestone.scss" lang="scss" scoped></style>
