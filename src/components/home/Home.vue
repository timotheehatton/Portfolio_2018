<template>
  <div>
    <router-link to="trilatte3d" class="content--item">
      <div class="content--item--date">
        <span>01/2018</span>
      </div>
      <div class="content--item--img">
        <video muted loop class="content--item--video" :src="'./static/videos/trilatte-video.mp4'"></video>
      </div>
      <div class="content--item--content">
        <h2 class="content--item--content--title">Trilatte 3D</h2>
        <p class="content--item--content--description">
          Réalisation d’une web application permettant de configurer
          et tester différentes finitions intérieures.
        </p>
        <span class="content--item--content--link">
          <i class="arrow"></i>Voir le projet
        </span>
      </div>
    </router-link>
    <router-link to="bmw-i8" class="content--item">
      <div class="content--item--date">
        <span>03/2018</span>
      </div>
      <div class="content--item--img">
        <video muted loop class="content--item--video" :src="'./static/videos/bmw-video.mp4'"></video>
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
    </router-link>
    <router-link to="Doctobot" class="content--item doctobot">
      <div class="content--item--date">
        <span>02/2018</span>
      </div>
      <div class="content--item--img">
        <video muted loop class="content--item--video" :src="'./static/videos/doctobot-video.mp4'"></video>
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
    </router-link>
    <router-link to="wise-stone" class="content--item last">
      <div class="content--item--date">
        <span>04/2018</span>
      </div>
      <div class="content--item--img">
        <video muted loop class="content--item--video" :src="'./static/videos/wisestone-video.mp4'"></video>
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
    </router-link>
  </div>
</template>

<!-- script  -->
<script type="text/javascript" src="@/components/home/_Home.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/home/_Home.scss" lang="scss" scoped></style>
