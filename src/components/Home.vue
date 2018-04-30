<template>
  <div class="hello">
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
                Réalisation d’une web application permettant de configurer et tester différentes finitions intérieures.
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
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.doctobot {
    .mockup--img {
        max-width: 400px;
    }
    .visuals {
        display: block;
        text-align: center;
        &--img {
            max-width: 400px;
            &:nth-child(3) {
                margin-right: 130px;
            }
        }
    }
    .feature {
        display: block;
        text-align: center;
        margin-bottom: 230px;
        .feature--content {
            margin: 0 auto 200px auto;
        }
        .feature--img {
            max-width: 320px;
            &:nth-child(3) {
                margin: 0 50px;
            }
        }
    }
    .content--item--img {
        width: 80%;
        text-align: center;
        @media screen and (max-width: 900px) {
            text-align: left;
        }
    }
    .content--item--video {
        height: 400px;
        width: auto;
    }
}
.content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow-y: scroll;
    max-width: 1440px;
    &::-webkit-scrollbar { 
        display: none; 
    }
    &--item {
        align-content: center;
        align-items: center;
        display: flex;
        margin-top: 150px;
        @media screen and (max-width: 900px) {
            display: block;
            margin-left: 40px;
        }
        @media screen and (max-width: 500px) {
            margin-left: 20px;
        }
        @media screen and (max-width: 500px) {
            margin-top: 80px;
        }
        &--date {
            margin-left: 75px;
            margin-right: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 1330px) {
                width: auto;
                margin-right: 50px;
                margin-left: 60px;
            }
            @media screen and (max-width: 1100px) {
                margin-right: 30px;
            }
            @media screen and (max-width: 1000px) {
                margin-left: 40px;
            }
            @media screen and (max-width: 900px) {
                display: block;
                margin-left: 0;
                margin-bottom: 30px;
            }
            span {
                font-weight: bold;
                font-size: 14px;
                color: #fff;
            }
        }
        &--img {
            max-width: 670px;
            @media screen and (max-width: 900px) {
                margin-right: 40px;
            }
            @media screen and (max-width: 500px) {
                margin-right: 20px;
            }
            img {
                width: 100%;
            }
        }
        &--video {
            width: 100%;
        }
        &--content {
            margin-left: 75px;
            margin-right: 75px;
            width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media screen and (max-width: 1330px) {
                margin-left: 50px;
                margin-right: 60px;
            }
            @media screen and (max-width: 1100px) {
                margin-left: 30px;
            }
            @media screen and (max-width: 1000px) {
                margin-right: 40px;
            }
            @media screen and (max-width: 900px) {
                margin-right: 0;
                margin-left: 0;
                margin-top: 30px;
            }
            &--title {
                margin-bottom: 35px;
                font-weight: bold;
                font-size: 45px;
                color: #fff;
            }
            &--description {
                font-size: 36px;
                font-size: 16px;
                color: #A4A4A4;
                line-height: 24px;
                margin-bottom: 35px;
                font-weight: 300;
            }
            &--link {
                font-weight: bold;
                font-size: 13px;
                color: #fff;
                position: relative;
                i {
                    height: 11px;
                    width: 15px;
                    margin-right: 10px;
                    display: inline-block;
                    //background-image: url('./img/arrow.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                }
            }
        }
    }
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.featureTitle {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    text-transform: uppercase;
    &::after {
        content: '';
        display: block;
        height: 2px;
        width: 30px;
        background: #000000;
        margin-top: 15px;
        margin-bottom: 30px;
    }
}

.featureContent {
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    line-height: 27px;
    a {
        color: #000000;
    }
}

.last {
    margin-bottom: 150px;
}
</style>