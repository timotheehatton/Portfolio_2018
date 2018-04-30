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
        <img class="mockup--img"  alt="">
    </section>
    <section class="visuals">
        <video muted loop class="visuals--img visuals--video" ></video>
        <img class="visuals--img"  alt="">
    </section>
    <section class="feature">
        <div class="feature--content">
            <div class="feature--content--title featureTitle">Compatibilité WebVR</div>
            <p class="feature--content--txt featureContent">
                La demande principale du client était de rendre l'application compatible avec un casque de réalité virtuel (google card board). L'application a donc était fortement optimisée pour les mobiles, et rendu compatible à la norme WebVR pour une parfaite expérience.
            </p>
        </div>
        <img alt="" class="feature--img">
    </section>
    <a  class="nav">
        <div class="nav--item">
            <h4 class="nav--item--title">BMW i8</h4>
            <p class="nav--item--description">
                Pour un projet de 3éme année en développement Wordpress, nous avons créé un site web pour présenter la nouvelle BMW i8. Le site dispose d'un configurateur avec une vue à 360 degrés. Tout le contenu du site est également administrable via le back-office.
            </p>
        </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to the jungle',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .landing {
        height: 600px;
        width: 100%;
        background-size: cover;
        background-position: center center;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 800px) {
            height: 400px;
        }
        &--title {
            text-align: center;
            font-weight: bold;
            font-size: 144px;
            color: #F3F3F3;
            text-transform: uppercase;
            @media screen and (max-width: 950px) {
                font-size: 100px;
            }
            @media screen and (max-width: 750px) {
                font-size: 80px;
            }
            @media screen and (max-width: 550px) {
                font-size: 60px;
            }
            @media screen and (max-width: 400px) {
                font-size: 40px;
            }
        }
    }

    .project {
        padding-top: 180px;
        padding-bottom: 180px;
        background-color: #fff;
        @media screen and (max-width: 780px) {
            padding-top: 80px;
            padding-bottom: 80px;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &--description {
            max-width: 770px;
            text-align: center;
            margin-bottom: 130px;
            @media screen and (max-width: 780px) {
                margin-bottom: 60px;
            }
            &--title {
                &::after {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &--content {
                margin-left: 20px;
                margin-right: 20px;
            }
        }
        &--specifications {
            padding-left: 20px;
            padding-right: 20px;
            width: 100%;
            max-width: 1100px;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 780px) {
                display: block;
                padding-left: 50px;
                padding-right: 50px;
            }
            @media screen and (max-width: 630px) {
                padding-left: 20px;
                padding-right: 20px;
            }
            &--item {
                @media screen and (max-width: 780px) {
                    margin-bottom: 40px;
                    width: 250px;
                }
                @media screen and (max-width: 440px) {
                    width: 170px;
                }
            }
            &--item:nth-child(1) {
                @media screen and (max-width: 780px) {
                    float: right;
                }
                @media screen and (max-width: 630px) {
                    width: 200px;
                }
                @media screen and (max-width: 500px) {
                    width: 150px;
                }
                @media screen and (max-width: 440px) {
                    width: 100px;
                }
            }
            &--item:nth-child(3) {
                @media screen and (max-width: 780px) {
                    float: right;
                }
                @media screen and (max-width: 630px) {
                    width: 200px;
                }
                @media screen and (max-width: 500px) {
                    width: 150px;
                }
                @media screen and (max-width: 440px) {
                    width: 100px;
                }
            }
        }
    }

    .mockup {
        padding-top: 150px;
        padding-bottom: 200px;
        background-color: #EEEEEE;
        text-align: center;
        @media screen and (max-width: 780px) {
            padding-top: 80px;
            padding-bottom: 80px;
        }
        &--title {
            font-weight: bold;
            font-size: 140px;
            color: #F5F5F5;
            text-transform: uppercase;
            @media screen and (max-width: 1300px) {
                font-size: 100px;
            }
            @media screen and (max-width: 930px) {
                font-size: 80px;
            }
            @media screen and (max-width: 750px) {
                font-size: 60px;
            }
            @media screen and (max-width: 560px) {
                font-size: 40px;
            }
            @media screen and (max-width: 370px) {
                font-size: 30px;
            }
        }
        &--img {
            max-width: 1060px;
            width: 90%;
            margin-top: -50px;
            @media screen and (max-width: 1300px) {
                margin-top: -30px;
            }
            @media screen and (max-width: 930px) {
                margin-top: -20px;
            }
            @media screen and (max-width: 750px) {
                margin-top: -10px;
            }
        }
    }

    .visuals {
        padding-top: 230px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 780px) {
            padding-top: 80px;
        }
        &--img {
            width: 90%;
            max-width: 1060px;
            margin-bottom: 230px;
            @media screen and (max-width: 780px) {
                margin-bottom: 80px;
            }
        }
    }

    .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        &--content {
            margin-bottom: 200px;
            max-width: 770px;
            text-align: center;
            margin-left: 20px;
            margin-right: 20px;
            @media screen and (max-width: 780px) {
                margin-bottom: 80px;
            }
            &--title {
                color: #fff;
                &::after {
                    background-color: #fff;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &--txt {
                color: #fff;
            }
        }
        &--img {
            width: 100%;
            margin-right: 0;
        }
    }

    .nav {
        display: block;
        background-color: #fff;
        padding-top: 230px;
        @media screen and (max-width: 780px) {
            padding-top: 120px;
        }
        &--item {
            background-color: #F3F3F3;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 80px;
            @media screen and (max-width: 780px) {
                padding-bottom: 40px;
            }
            &--title {
                font-weight: bold;
                font-size: 144px;
                text-align: center;
                color: #F3F3F3;
                text-transform: uppercase;
                margin-bottom: 80px;
                background-color: #fff;
                width: 100%;
                line-height: 55%;
                @media screen and (max-width: 900px) {
                    font-size: 15vw;
                }
                @media screen and (max-width: 780px) {
                    margin-bottom: 40px;
                }
            }
            &--description {
                max-width: 770px;
                font-size: 18px;
                color: #000000;
                text-align: center;
                line-height: 27px;
                margin-left: 20px;
                margin-right: 20px;
                font-weight: 300;
            }
        }
    }
</style>
