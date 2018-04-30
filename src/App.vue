<template>
  <div id="app">
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
    <router-view/>
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
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
.header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		width: 100%;
		z-index: 3;
		&--logo {
				height: 24px;
				width: 24px;
				display: block;
				position: absolute;
				top: 60px;
				left: 60px;
				@media screen and (max-width: 1000px) {
						top: 40px;
						left: 40px;
				}
				@media screen and (max-width: 500px) {
						left: 20px;
						top: 20px;
				}
				img {
						height: 100%;
						width: 100%;
				}
		}
		&--works {
				position: absolute;
				right: -21px;
				top: -10px;
				height: 100px;
				width: 120px;
				@media screen and (max-width: 1000px) {
						right: -41px;
						top: -30px;
				}
				@media screen and (max-width: 500px) {
						right: -56px;
						top: -45px;
				}
				&:hover {
						span {
								transform: translate3d(-10px, 0, 0);
								&:nth-child(1) {
										transition-delay: .4s;
								}
								&:nth-child(2) {
										transition-delay: .3s;
								}
								&:nth-child(3) {
										transition-delay: .2s;
								}
								&:nth-child(4) {
										transition-delay: .1s;
								}
						}
				}
				&--lines {
						z-index: -1;
						position: relative;
						transform: rotate(-225deg);
						height: 50px;
						span {
								position: absolute;
								display: block;
								height: 1px;
								background: #fff;
								will-change: transform;
								transition: transform ease-in .2s;
								&:nth-child(1) {
										width: 109px;
										transition-delay: .4s;
								}
								&:nth-child(2) {
										top: 8px;
										width: 102px;
										transition-delay: .3s;
								}
								&:nth-child(3) {
										top: 16px;
										width: 110px;
										transition-delay: .2s;
								}
								&:nth-child(4) {
										top: 24px;
										width: 118px;
										transition-delay: .1s;
								}
								&:nth-child(5) {
										top: 32px;
										width: 126px;
								}
						}
				}
				&--content {
						font-weight: bold;
						font-size: 14px;
						color: #fff;
						position: relative;
						top: 18px;
						right: -2px;
						text-transform: uppercase;
						letter-spacing: 2px;
						&--close {
								top: 16px;
								right: 23px;
						}
				}
		}
}
.about {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		background-color: #1A1A1A;
		z-index: 2;
		padding-top: 180px;
		padding-bottom: 180px;
		color: #fff;
		transform: translateY(-100%);
		transition: .5s ease transform;
		@media screen and (max-width: 590px) {
				padding-top: 100px;
				padding-bottom: 100px;
		}
		&--content {
				display: flex;
				justify-content: center;
				@media screen and (max-width: 590px) {
						flex-direction: column;
				}
				&--item {
						transition-duration: .5s;
						opacity: 0;
						transform: translateY(-30px);
						transition-delay: .3s;
						&:nth-child(2) {
								margin-left: 70px;
								margin-right: 70px;
								padding-right: 70px;
								padding-left: 70px;
								position: relative;
								@media screen and (max-width: 1270px) {
										margin-left: 40px;
										margin-right: 40px;
										padding-right: 40px;
										padding-left: 40px;
								}
								@media screen and (max-width: 1150px) {
										margin-left: 30px;
										margin-right: 30px;
										padding-right: 30px;
										padding-left: 30px;
								}
								@media screen and (max-width: 590px) {
										margin-left: 40px;
										margin-right: 0px;
										padding-right: 40px;
										padding-left: 0px;
										margin-top: 40px;
										margin-bottom: 40px;
								}
								&::before {
										position: absolute;
										top: 0;
										left: 0;
										content: '';
										height: 100%;
										width: 1px;
										background-color: #fff;
										display: block;
										transform: scale(0);
										transition-duration: .3s;
										transition-delay: .5s;
										@media screen and (max-width: 590px) {
												display: none;
										}
								}
								&::after {
										position: absolute;
										top: 0;
										left: 100%;
										content: '';
										height: 100%;
										width: 1px;
										background-color: #fff;
										display: block;
										transform: scale(0);
										transition-duration: .3s;
										transition-delay: .5s;
										@media screen and (max-width: 590px) {
												display: none;
										}
								}

						}
						&:nth-child(1) {
								@media screen and (max-width: 1150px) {
										margin-left: 40px;
								}
						}
						&:nth-child(3) {
								@media screen and (max-width: 1150px) {
										margin-right: 40px;
								}
						@media screen and (max-width: 590px) {
										margin-left: 40px;
										margin-right: 0;
								}
						}
						&--title {
								font-size: 18px;
						}
						&--bold {
								margin-top: 10px;
								display: block;
								font-weight: bold;
								font-size: 26px;
						}
						&--description {
								max-width: 580px;
								font-size: 18px;
								line-height: 27px;
						}
						&--link {
								&:nth-child(4) {
										margin-bottom: 0;
								}
								margin-bottom: 12px;
								display: block;
								font-size: 18px;
								font-weight: bold;
								color: #fff;
								@media screen and (max-width: 590px) {
										display: inline-block;
										margin-bottom: 0;
										margin-right: 20px;
								}
						}
				}
		}
}

.opening {
		.about--content--item {
				transition-duration: .5s;
				opacity: 1;
				transform: translateY(0px);
				&:nth-child(2) {
						&::after, &::before {
								transform: scale(1);
						}
				}
		}
		~ .overlay {
				opacity: 1;
				z-index: 1;
		}
}

.overlay {
		position: fixed;
		z-index: -2;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		opacity: 0;
}

a {
	text-decoration: none;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	overflow: hidden;
	background-color: #121212;
}
</style>
