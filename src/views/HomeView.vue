<!-- Aqui va todo el HTML -->

<template>
  <div class="Home" id="home">
    <video :src="portada" class="videoportada" autoplay muted loop></video>
    <v-container class="containerprincipal">
      <v-row class="wrap-textLogo">
        <v-col class="elements" xs="12" sm="12" lg="6" cols="12" md="6">
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt posuere accumsan.
          </p>
          <v-btn
            elevation="2"
            to="/proyectos"
            color="secondary"
            rounded
            class="btn-proyect text-capitalize"
            >Ver proyectos</v-btn
          >
        </v-col>
        <v-col cols="12" class="text-bottom text-center">
          <p>CONCEPTOS QUE TRANSFORMAN ESPACIOS</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="container-reconocimientos">
      <v-row>
        <v-col cols="12" class="titulo-reconoc">
          <h3>Reconocimientos</h3>
        </v-col>
        <v-col cols="12" class="galeria-reconoc">
          <v-row class="galeria">
            <v-col lg="3" cols="12">
              <img
                src="@/assets/certi-01.png"
                class="contenedorfoto activefoto"
              />
            </v-col>
            <v-col lg="3" cols="12">
              <img
                src="@/assets/certi-01.png"
                class="contenedorfoto activefoto"
              />
            </v-col>
            <v-col lg="3" cols="12">
              <img
                src="@/assets/certi-01.png"
                class="contenedorfoto activefoto"
              />
            </v-col>
            <v-col lg="3" cols="12">
              <img
                src="@/assets/certi-01.png"
                class="contenedorfoto activefoto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="container-proyectos" id="Diseñoespacios">
      <v-row>
        <v-col cols="12" class="tituloproyectos text-center">
          <h3>Diseño de espacios</h3>
        </v-col>
        <v-col class="elements3" cols="12" sm="12" lg="7" md="6">
          <img
            :src="proyectActive.img"
            class="fotoproyecto"
            transition="scale-transition"
          />
        </v-col>
        <v-col class="elements3" cols="12" sm="12" lg="5" md="6">
          <v-row
            :class="{
              'infoproyects-container': true,
            }"
          >
            <v-col
              lg="12"
              cols="12"
              :class="{
                'info-proyect-box': true,
                active: proyectActive.title == p.title,
              }"
              v-for="(p, i) in proyects"
              :key="i"
            >
              <h3>{{ p.title }}</h3>
              <p>{{ p.description }}</p>
              <v-btn
                elevation="2"
                color="primary"
                outlined
                small
                rounded
                class="text-capitalize"
                @click="proyectActive = p"
                >Ver proyecto</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container class="container-servicios" dark>
      <v-row>
        <v-col class="titulo-servicios" cols="12">
          <h3>Diseño de espacios</h3>
        </v-col>
        <v-col class="textos-serv" cols="12">
          <div class="serv-titulo pa-6">
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
            <v-divider
              class="border-opacity-100 mb-4"
              color="success"
            ></v-divider>
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
          </div>

          <div class="serv-info pa-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget felis non lorem fringilla laoreet quis at ligula. Fusce
              euismod nisl vitae leo gravida ornare. Vivamus accumsan molestie
              nisi, non consequat massa blandit eu. Vestibulum ornare dolor sit
              amet lorem semper, in suscipit arcu molestie. Vivamus sodales,
            </p>
          </div>
        </v-col>
        <v-col class="iconos-serv" cols="12">
          <div class="cuadro-icono">
            <img
              src="@/assets/Moodboard - NOVO-icons-06.svg"
              width="150px"
              height="150px"
            />
          </div>
          <div class="cuadro-icono">
            <img
              src="@/assets/Moodboard - NOVO-icons-06.svg"
              width="150px"
              height="150px"
            />
          </div>
          <div class="cuadro-icono">
            <img
              src="@/assets/Moodboard - NOVO-icons-06.svg"
              width="150px"
              height="150px"
            />
          </div>
          <div class="cuadro-icono">
            <img
              src="@/assets/Moodboard - NOVO-icons-06.svg"
              width="150px"
              height="150px"
            />
          </div>
        </v-col>
      </v-row>
    </v-container> -->

    <v-container class="container-lifestyle mb-12" id="showroom">
      <v-row>
        <v-col cols="12" class="lifestyle-title">
          <h2>Showroom</h2>
        </v-col>
        <v-col cols="12" class="lifestyle-objetos">
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            dark
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <!-- :color="active ? 'primary' : '#a9c62c'" -->
              <v-card
                dark
                class="ma-4 lifestyle-element pa-4"
                height="400"
                width="300"
                @click="toggle"
              >
                <v-img src="@/assets/silla.png" class="img-lifestyle-objeto">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <v-icon v-if="active" color="white" size="48"
                        >mdi-close-circle-outline</v-icon
                      >
                    </v-scale-transition>
                  </v-row></v-img
                >
                <v-card-title>Lorem ipsum</v-card-title>
                <v-divider
                  class="border-opacity-100 mb-2"
                  color="success"
                ></v-divider>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container class="container-CTA pa-12">
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        felis non lorem fringilla laoreet quis at ligula. Fusce euismod nisl
        vitae leo gravida ornare. Vivamus accumsan molestie nisi, non consequat
        massa blandit eu. Vestibulum ornare dolor sit amet lorem semper, in
        suscipit arcu molestie. Vivamus sodales, elit a ultrices tristique,
      </p>
      <v-btn
        elevation="2"
        color=""
        to="/proyectos"
        rounded
        class="text-capitalize"
        >Proyectos</v-btn
      >
    </v-container> -->

    <div class="container-proveedores y-0" id="Proveedores">
      <v-row class="wrap-tituloLogos">
        <v-col cols="12" class="elements2 text-center my-5 pt-0">
          <h3>Proveedores</h3>
        </v-col>
        <v-col cols="12" class="elements2">
          <marquee>
            <img class="mx-12" src="@/assets/provs/prov-09.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-10.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-11.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-12.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-13.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-14.svg" width="200px" />
            <img class="mx-12" src="@/assets/provs/prov-15.svg" width="200px" />
          </marquee>
        </v-col>
      </v-row>
    </div>
  
  </div>
</template>


<!-- Aqui va todo el JS -->

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dialogVideo: false,
      portada: require("@/assets/1100824913-preview.mp4"),
      proyects: [
        {
          title: "Lorem ipsum 1",
          img: require("@/assets/proyectosimg.jpg"),
          description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          link: "/sas",
        },
        {
          title: "Lorem ipsum 2",
          img: require("@/assets/reconoc.jpg"),
          description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          link: "/sas",
        },
        {
          title: "Lorem ipsum 3",
          img: require("@/assets/proyectosimg.jpg"),
          description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          link: "/sas",
        },
        {
          title: "Lorem ipsum 4",
          img: require("@/assets/reconoc.jpg"),
          description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          link: "/sas",
        },
      ],
      proyectActive: {
        title: "Lorem ipsum 1",
        img: require("@/assets/proyectosimg.jpg"),
        description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        link: "/sas",
      },
    };
  },
};
</script>


<!-- Aqui va todo el css -->

<style lang="scss">
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

.Home {
  width: 100%;
  overflow: clip;
  background-color: #1c1c1c;

  .videoportada {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .containerprincipal {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include responsive(mobile) {
      justify-content: center;
    }
    .wrap-textLogo {
      color: white;

      .elements {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-family: "Poppins light";
        @include responsive(mobile) {
          align-items: center;
        }

        .btn-proyect {
          font-family: "Poppins light";
          color: white;
        }
      }

      .text-bottom {
        font-family: "Poppins light";
        color: white;
        font-size: 22px;
      }
    }
  }

  .container-proveedores {
    .wrap-tituloLogos {
      width: 100%;
      height: 40vh;

      .elements2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: "Poppins light";
      }
    }
  }

  .container-proyectos {
    font-family: "Poppins light";

    .tituloproyectos {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .elements3 {
      height: 70vh;
      @include responsive(mobile) {
        height: auto;
      }
      .fotoproyecto {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }

      .infoproyects-container {
        height: 100%;
        width: 100%;

        .info-proyect-box {
          height: 25%;
          width: 100%;
          font-size: 13px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          align-items: flex-start;
          &:hover {
            transform: scale(1.1, 1.1);
            background: #757575fe !important;
            border-radius: 8px;
            z-index: 3;
            box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px,
              rgba(0, 0, 0, 0.22) 0px 15px 12px;
            transition: 0.5s ease-in-out;
          }
        }
        .active {
          transform: scale(1.2) !important;
          background: #a9c62c !important;
          border-radius: 8px;
          z-index: 3;
          box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }

  .container-reconocimientos {
    font-family: "Poppins light";

    .titulo-reconoc {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .galeria-reconoc {
      height: 40vh;
      @include responsive(mobile) {
        height: auto;
      }
      .galeria {
        height: 100%;

        .contenedorfoto {
          width: 200px;
          margin: auto;
          object-fit: cover;
          border-radius: 5px;
        }

        .activefoto:hover {
          transform: scale(1.2);
          z-index: 3;

          transition: 0.5s ease-in-out;
        }
      }
    }
  }

  .container-servicios {
    height: 100vh;
    width: 100%;
    font-family: "Poppins light";

    .titulo-servicios {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .textos-serv {
      height: 40vh;
      width: 100%;
      display: flex;
      flex-direction: row;

      .serv-titulo {
        height: 100%;
        width: 30%;
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: flex-start;

        .contenedor-titulo {
          height: auto;
        }
      }

      .serv-info {
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: flex-start;
        color: #fff;
        align-items: center;
      }
    }

    .iconos-serv {
      height: 30vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .cuadro-icono {
        height: 100%;
        width: 20%;
        background-color: rgb(39, 39, 39);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }
    }
  }

  .container-lifestyle {
    height: 80vh;
    @include responsive(mobile) {
      height: auto !important;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .lifestyle-title {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .lifestyle-objetos {
      height: 60vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      @include responsive(mobile) {
        height: auto !important;
      }

      .lifestyle-element {
        width: 30%;
        height: 100%;
        background-color: rgb(39, 39, 39);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
          rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
          rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        border-radius: 5px;
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: center;
        @include responsive(mobile) {
          width: 100%;
          height: 500px;
          margin-top: 10px;
        }

        .img-lifestyle-objeto {
          height: 70%;
          object-fit: cover;
        }
      }
    }
  }

  .container-CTA {
    height: 30vh;
    background-color: #a9c62c;
    border-radius: 5px;
    color: #1c1c1c;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}


// Aqui arriba cierra home
</style>
