<template>
  <v-app-bar class="nav" elevate-on-scroll>
    <v-container class="todonav">
      <div class="logo">
        <img src="@/assets/Logo-Novo-01.svg" class="" />
      </div>
      <div class="opciones">
        <a href="/#home">inicio</a>

        <router-link to="/about"> Sobre nosotros </router-link>
        <a href="/#Diseñoespacios">Diseño de espacios</a>
        <a href="/#showroom">Showroom</a>

        <v-btn
          elevation="2"
          href="/#footer"
          color="#fff"
          rounded
          outlined
          class="btn-proyect text-capitalize"
          >Contáctanos</v-btn
        >
      </div>

      <div class="btn-closed">
        <v-btn
          fab
          outlined
          color="secondary"
          small
          @click="openNavMobile = !openNavMobile"
        >
          <v-icon small>
            {{ openNavMobile ? "fa fa-close" : "fa fa-bars" }}
          </v-icon>
        </v-btn>
      </div>
    </v-container>
    <transition name="slide-fade">
      <div class="opciones-phone" v-if="openNavMobile">
        <a href="">inicio</a>
        <a href="">Sobre nosotros</a>
        <a href="">Diseño de espacios</a>
        <a href="">Showroom</a>
        <a href="">
          <v-btn
            elevation="2"
            to="/proyectos"
            color="secondary"
            rounded
            outlined
            class="btn-proyect text-capitalize"
            >Contáctanos</v-btn
          ></a
        >
      </div>
    </transition>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav-bar",

  data: () => ({
    openNavMobile: false,
  }),
};
</script>
<style lang="scss" scoped>
@import "@/_responsive.scss";
@font-face {
  font-family: "Poppins bold";
  src: url("@/assets/Fonts/Poppins-Bold.otf");
}

@font-face {
  font-family: "Poppins regular";
  src: url("@/assets/Fonts/Poppins-Regular.otf");
}

@font-face {
  font-family: "Poppins medium";
  src: url("@/assets/Fonts/Poppins-Medium.ttf");
}

@font-face {
  font-family: "Poppins light";
  src: url("@/assets/Fonts/Poppins-Light.otf");
}

html[data-scroll="0"] {
  .nav {
    width: 100vw;
    height: auto;
    background-color: transparent !important;

    z-index: 3;
    transition: 0.3s ease-in-out;

    .todonav {
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      margin-top: 50px;

      .logo {
        display: flex;
        height: auto;
        width: 40%;

        img {
          width: 250px;
        }
      }

      .opciones {
        width: 60%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        display: block;
        @include responsive(mobile) {
          display: none;
        }

        a {
          outline: none;
          text-decoration: none;
          font-family: "Poppins light";
          color: white;
        }
      }
    }
  }
}
.nav {
  width: 100vw;
  height: 400px;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #1c1c1cec !important;

  .todonav {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s ease-in-out;

    .logo {
      display: flex;
      height: auto;
      width: 40%;
      transition: 0.3s ease-in-out;
      @include responsive(mobile) {
        width: 150px;
      }

      img {
        width: 150px;
        z-index: 99;
        transition: 0.3s ease-in-out;
      }
    }

    .opciones {
      width: 60%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      display: block;
      @include responsive(mobile) {
        display: none;
      }
      a {
        outline: none;
        text-decoration: none;
        font-family: "Poppins light";
        color: white;
        margin-left: 10px;
      }
    }
  }
}
.leng {
  background-color: #37d906;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}

.btn-closed {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 99;
  background-color: #ecefeb0b;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  @include responsive(mobile) {
    display: block;
  }
}
.opciones-phone {
  width: 100%;
  height: 105vh;
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    font-family: "Poppins regular";
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 10px;
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
