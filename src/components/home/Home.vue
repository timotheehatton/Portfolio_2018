<template>
  <div>
    <div class="wrapper">
      <div class="wrapper--background"></div>
      <span class="wrapper--title">trilatte 3d</span>
    </div>
    <a href="#" class="content--item">
      <div class="content--item--date">
        <span>04/2018</span>
      </div>
      <div class="content--item--img">
        <video v-if="mobile === false" muted loop class="content--item--video" :src="'./static/videos/trilatte-video.mp4'" :poster="'./static/img/trilatte-poster.jpg'"></video>
        <img v-else :src="'./static/img/trilatte-poster.jpg'" alt="">
      </div>
      <div class="content--item--content">
        <h2 class="content--item--content--title">Trilatte 3D</h2>
        <p class="content--item--content--description">
          Réalisation d’une web application permettant de configurer et tester différentes finitions intérieures.
        </p>
        <span class="content--item--content--link">
          <i class="arrow"></i>Voir le projet
        </span>
      </div>
    </a>
    <a href="#" class="content--item">
      <div class="content--item--date">
        <span>03/2018</span>
      </div>
      <div class="content--item--img">
        <video v-if="mobile === false" muted loop class="content--item--video" :src="'./static/videos/bmw-video.mp4'" :poster="'./static/img/bmw-poster.jpg'"></video>
        <img v-else :src="'./static/img/bmw-poster.jpg'" alt="">
      </div>
      <div class="content--item--content">
        <h2 class="content--item--content--title">BMW i8</h2>
        <p class="content--item--content--description">
          Réalisation d’un site web Wordpress pour présenté la BMW i8 et disposant d'un configurateur.
        </p>
        <span class="content--item--content--link">
          <i class="arrow"></i>Voir le projet
        </span>
      </div>
    </a>
    <a href="#" class="content--item doctobot">
      <div class="content--item--date">
        <span>02/2018</span>
      </div>
      <div class="content--item--img">
        <video v-if="mobile === false" muted loop class="content--item--video" :src="'./static/videos/doctobot-video.mp4'" :poster="'./static/img/doctobot-poster.jpg'"></video>
        <img v-else :src="'./static/img/doctobot-poster.jpg'" alt="">
      </div>
      <div class="content--item--content">
        <h2 class="content--item--content--title">Doctobot</h2>
        <p class="content--item--content--description">
          Design et prototypage d’une application d'assistance et de conseils medicaux, sous forme d'un chatbot.
        </p>
        <span class="content--item--content--link">
          <i class="arrow"></i>Voir le projet
        </span>
      </div>
    </a>
    <a href="#" class="content--item last">
      <div class="content--item--date">
        <span>01/2018</span>
      </div>
      <div class="content--item--img">
        <video v-if="mobile === false" muted loop class="content--item--video" :src="'./static/videos/wisestone-video.mp4'" :poster="'./static/img/wisestone-poster.jpg'"></video>
        <img v-else :src="'./static/img/wisestone-poster.jpg'" alt="">
      </div>
      <div class="content--item--content">
        <h2 class="content--item--content--title">Wise Stone</h2>
        <p class="content--item--content--description">
          Réalisation d’un site web pour le chasseur immobilier Wise Stone, basé sur le CMS Wordpress.
        </p>
        <span class="content--item--content--link">
          <i class="arrow"></i>Voir le projet
        </span>
      </div>
    </a>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/home/_Home.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/home/_Home.scss" lang="scss" scoped></style>
