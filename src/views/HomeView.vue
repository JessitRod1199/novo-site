<!-- Aqui va todo el HTML -->

<template>
  <div class="Home">


    <v-app-bar class="nav" elevate-on-scroll>
      <v-container class="todonav">
        <div class="logo">
          <img src="@/assets/Logo-Novo-01.svg" class="">

        </div>
        <div class="opciones">
          <a href="">inicio</a>
          <a href="">Sobre nosotros</a>
          <a href="">Diseño de espacios</a>
          <a href="">Showroom</a>
          <a href="">Contacto</a>
        </div>

        <div class="leng">

        </div>
      </v-container>
    </v-app-bar>

    <video :src="portada" class="videoportada" autoplay muted loop></video>

    <v-container class="containerprincipal">
      <v-row class="wrap-textLogo">
        <v-col class="elements" xs="12" sm="12" lg="6" md="6">
          <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt posuere accumsan.</p>
          <v-btn elevation="2" to="/proyectos" color="secondary" rounded class=" btn-proyect text-capitalize ">Ver
            proyectos</v-btn>
        </v-col>
        <v-col class="elements" xs="12" sm="12" lg="6" md="6">

        </v-col>
        <v-col cols="12" class="text-bottom text-center">
          <p>CONCEPTOS QUE TRANSFORMAN ESPACIOS</p>
        </v-col>
      </v-row>
    </v-container>

    <div class="container-proveedores y-0">
      <v-row class="wrap-tituloLogos ">
        <v-col cols="12" class="elements2 text-center my-5 pt-0">
          <h3>Proveedores</h3>
        </v-col>
        <v-col cols="12" class="elements2">
          <marquee>
            <img class="mx-12" src="@/assets/provs/prov-09.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-10.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-11.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-12.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-13.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-14.svg" width="200px">
            <img class="mx-12" src="@/assets/provs/prov-15.svg" width="200px">
          </marquee>
        </v-col>
      </v-row>
    </div>

    <v-container class="container-proyectos">
      <v-row>
        <v-col cols="12" class="tituloproyectos text-center">
          <h3>Proyectos</h3>
        </v-col>
        <v-col class="elements3" xs="12" sm="12" lg="7" md="6">
          <img src="@/assets/proyectosimg.jpg" class="fotoproyecto">
        </v-col>
        <v-col class="elements3" xs="12" sm="12" lg="5" md="6">
          <v-row class="infoproyects-container">
            <v-col lg="12" class="info-proyect-box">
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <v-btn elevation="4" color="primary" to="/proyectos" outlined rounded class="text-capitalize ">Ver
                proyecto</v-btn>
            </v-col>
            <v-col lg="12" class="info-proyect-box active">
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <v-btn color="primary" to="/proyectos" outlined rounded class="text-capitalize">Ver
                proyecto</v-btn>
            </v-col>
            <v-col lg="12" class="info-proyect-box">
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <v-btn elevation="4" color="primary" to="/proyectos" outlined rounded class="text-capitalize ">Ver
                proyecto</v-btn>
            </v-col>
            <v-col lg="12" class="info-proyect-box">
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              <v-btn elevation="4" color="primary" to="/proyectos" outlined rounded class="text-capitalize ">Ver
                proyecto</v-btn>
            </v-col>


          </v-row>
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
            <v-col lg="4">
              <img src="@/assets/reconoc.jpg" class="contenedorfoto">
            </v-col>
            <v-col lg="4">
              <img src="@/assets/reconoc.jpg" class="contenedorfoto activefoto">
            </v-col>
            <v-col lg="4">
              <img src="@/assets/reconoc.jpg" class="contenedorfoto">
            </v-col>


          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="container-servicios">
      <v-row>
        <v-col class="titulo-servicios" cols="12">
          <h3>Diseño de espacios</h3>
        </v-col>
        <v-col class="textos-serv" cols="12">
          <div class="serv-titulo pa-6">
            <div class="contenedor-titulo mb-2 text-left">
              <h3>Lorem ipsum</h3>
            </div>
            <v-divider class="border-opacity-100 mb-4 " color="success"></v-divider>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis non lorem fringilla laoreet
              quis at ligula. Fusce euismod nisl vitae leo gravida ornare. Vivamus accumsan molestie nisi, non consequat
              massa blandit eu. Vestibulum ornare dolor sit amet lorem semper, in suscipit arcu molestie. Vivamus sodales,
            </p>
          </div>
        </v-col>
        <v-col class="iconos-serv" cols="12">
          <div class="cuadro-icono">
            <img src="@/assets/Moodboard - NOVO-icons-06.svg" width="150px" height="150px">
          </div>
          <div class="cuadro-icono">
            <img src="@/assets/Moodboard - NOVO-icons-06.svg" width="150px" height="150px">
          </div>
          <div class="cuadro-icono">
            <img src="@/assets/Moodboard - NOVO-icons-06.svg" width="150px" height="150px">
          </div>
          <div class="cuadro-icono">
            <img src="@/assets/Moodboard - NOVO-icons-06.svg" width="150px" height="150px">
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="container-lifestyle mb-12">
      <v-row>
        <v-col cols="12" class="lifestyle-title">
          <h2>Lifestyle</h2>
        </v-col>
        <v-col cols="12" class="lifestyle-objetos">
          <div class="lifestyle-element pa-4">
            <img src="@/assets/silla.png" class="img-lifestyle-objeto">
            <h3>Lorem ipsum</h3>
            <v-divider class="border-opacity-100 mb-2" color="success"></v-divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="lifestyle-element pa-4">
            <img src="@/assets/silla.png" class="img-lifestyle-objeto">
            <h3>Lorem ipsum</h3>
            <v-divider class="border-opacity-100 mb-2" color="success"></v-divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="lifestyle-element pa-4">
            <img src="@/assets/silla.png" class="img-lifestyle-objeto">
            <h3>Lorem ipsum</h3>
            <v-divider class="border-opacity-100 mb-2" color="success"></v-divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

        </v-col>
      </v-row>
    </v-container>

    <v-container class="container-CTA pa-12 ">
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis non lorem
        fringilla laoreet quis at ligula. Fusce euismod nisl vitae leo gravida ornare. Vivamus accumsan molestie nisi, non
        consequat massa blandit eu. Vestibulum ornare dolor sit amet lorem semper, in suscipit arcu molestie. Vivamus
        sodales, elit a ultrices tristique,</p>
      <v-btn elevation="2" color="" to="/proyectos" rounded class="text-capitalize">Proyectos</v-btn>

    </v-container>

  </div>
</template>


<!-- Aqui va todo el JS -->

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  data() {
    return {
      portada: require('@/assets/video3.mp4')
    }
  },

  components: {
    HelloWorld,
  },
}


</script>


<!-- Aqui va todo el css -->

<style lang="scss">
@font-face {
  font-family: 'Poppins bold';
  src: url('@/assets/Fonts/Poppins-Bold.otf');
}

@font-face {
  font-family: 'Poppins regular';
  src: url('@/assets/Fonts/Poppins-Regular.otf');
}

@font-face {
  font-family: 'Poppins medium';
  src: url('@/assets/Fonts/Poppins-Medium.ttf');
}

@font-face {
  font-family: 'Poppins light';
  src: url('@/assets/Fonts/Poppins-Light.otf');
}


html[data-scroll="0"] {
  .nav {
    width: 100%;
    height: auto;
    background-color: transparent !important;
    position: fixed;
    z-index: 3;

    .todonav {
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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
        justify-content: space-around;
        align-items: flex-end;

        a {
          outline: none;
          text-decoration: none;
          font-family: 'Poppins light';
          color: white;
        }
      }
    }





  }
}



.Home {
  width: 100%;
  position: relative;
  background-color: #1c1c1c;

  .nav {
    width: 100%;
    height: auto;
    z-index: 3;
    position: fixed;
    background-color: #1c1c1cec !important;

    .todonav {
      width: 100%;
      height: 90px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;


      .logo {
        display: flex;
        height: auto;
        width: 40%;

        img {
          width: 150px;
        }

      }

      .opciones {
        width: 60%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        a {
          outline: none;
          text-decoration: none;
          font-family: 'Poppins light';
          color: white;
        }
      }
    }



  }



  .videoportada {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
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

    .wrap-textLogo {
      color: white;

      .elements {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-family: 'Poppins light';

        .btn-proyect {
          font-family: 'Poppins light';
          color: white;
        }
      }

      .text-bottom {
        font-family: 'Poppins light';
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
        font-family: 'Poppins light';

      }
    }



  }

  .container-proyectos {
    font-family: 'Poppins light';

    .tituloproyectos {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

    }

    .elements3 {
      height: 70vh;

      .fotoproyecto {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }

      .infoproyects-container {
        height: 100%;
        width: 100%;


        .info-proyect-box {
          height: 25%;
          width: 100%;
          font-size: 13px;
          color: white;
        }

        .active:hover {
          transform: scale(1.2);
          background: #a9c62c !important;
          border-radius: 8px;
          z-index: 3;
          box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
          transition: 0.5s ease-in-out;
        }

      }


    }

  }

  .container-reconocimientos {
    font-family: 'Poppins light';


    .titulo-reconoc {
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .galeria-reconoc {
      height: 40vh;

      .galeria {
        height: 100%;

        .contenedorfoto {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 5px;

        }

        .activefoto:hover {
          transform: scale(1.2);
          z-index: 3;
          box-shadow: rgba(0, 0, 0, 0.298) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
          transition: 0.5s ease-in-out;
        }

      }


    }




  }

  .container-servicios {
    height: 100vh;
    width: 100%;
    font-family: 'Poppins light';

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
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      }
    }




  }

  .container-lifestyle {
    height: 80vh;

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

      .lifestyle-element {
        width: 30%;
        height: 100%;
        background-color: rgb(39, 39, 39);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

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
