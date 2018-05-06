<template>
  <div>
    <section class="landing">
    <h1 class="landing--title">Doctobot</h1>
  </section>
  <section class="project">
    <div class="container">
      <div class="project--description">
        <h3 class="project--description--title featureTitle">Le projet</h3>
        <p class="project--description--content featureContent">
          Doctobot est un précieux conseiller médical vous permettant d'assurer un suivi 2.0 de votre santé. Présent sous la forme d'un chatbot, celui-ci permet d'assurer le lien avec son médecin en cas de détection de symptômes lors de sa consultation.
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
          <p class="project--specifications--item--content featureContent">UX Design<br>Prototype Framer JS</p>
        </div>
        <div class="project--specifications--item">
          <h3 class="project--specifications--item--title featureTitle">Url</h3>
          <p class="project--specifications--item--content featureContent"><a target="_blank" href="#">Coming soon</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="mockup">
    <h2 class="mockup--title">Chat bot</h2>
    <img class="mockup--img" :src="'./static/img/doctobot-mockup.png'" alt="">
  </section>
  <section class="visuals">
    <video muted loop class="visuals--img visuals--video" :src="'./static/videos/doctobot-video.mp4'"></video>
    <div class="clear"></div>
    <img class="visuals--img" :src="'./static/img/doctobot-visual1.jpg'" alt="">
    <img class="visuals--img" :src="'./static/img/doctobot-visual2.jpg'" alt="">
  </section>
  <section class="feature">
    <div class="feature--content">
      <div class="feature--content--title featureTitle">Objectif de vie</div>
      <p class="feature--content--txt featureContent">
        Doctobot accompagne l'utilisateur dans le choix de ses objectifs de vie tout en le conseillant sur sa santé, mais aussi son environnement en temps réel. Doctobot repose sur le principe de : plus l'utilisateur lui en dira, mieux il pourra le conseiller.
      </p>
    </div>
    <img :src="'./static/img/doctobot-visual3.jpg'" alt="" class="feature--img">
    <img :src="'./static/img/doctobot-visual4.jpg'" alt="" class="feature--img">
    <img :src="'./static/img/doctobot-visual5.jpg'" alt="" class="feature--img">
  </section>
  <router-link to="wise-stone" class="nav">
    <div class="nav--item">
      <h4 class="nav--item--title">Wise stone</h4>
      <p class="nav--item--description">
        Pour un projet freelance encadré par l'école, nous avons créé un site web pour le chasseur immobilier Wise Stone. Le site est développé sur le CMS Wordpress et dispose d'un formulaire dynamique permettant de renseigner son projet immobilier.
      </p>
    </div>
  </router-link>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/cases/doctobot/_Doctobot.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/cases/doctobot/_Doctobot.scss" lang="scss" scoped></style>
