<template>
  <div class="about-us">
    <div class="header">


    </div>
    <v-container class="py-12" id="about">
      <v-row>
        <v-col cols="12" sm="4" lg="4" md="4">
          <v-img src="@/assets/person.png"></v-img>
        </v-col>
        <v-col cols="12" sm="8" lg="8" md="8">
          <h1>Sobre Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
            dolor commodo, ultrices libero et, varius lorem. Vestibulum vehicula
            convallis magna ut laoreet. Donec lacinia volutpat mattis. Aliquam
            erat volutpat. Fusce ut orci a nisi ornare consectetur in eleifend
            ex. Etiam in condimentum lacus. Aliquam ac ultrices ex. <br />
            <br />
            Donec eget purus et ex eleifend aliquam. Sed malesuada justo lectus.
            Cras sit amet elit ipsum. Phasellus suscipit sagittis tellus, eget
            tincidunt ex venenatis pretium. In tempus euismod ornare. Sed
            sodales fringilla diam, vitae ornare sem mattis et. In tincidunt
            vehicula diam, lobortis interdum ligula. Vivamus lacus nunc,
            vehicula sed neque id, dignissim tristique tellus. Curabitur feugiat
            egestas lacus at bibendum. Sed ullamcorper est at fringilla rutrum.
            Phasellus rutrum sapien ut orci efficitur tempor.
            <br />
            <br />
            Donec ultricies interdum fermentum. Nunc ac ipsum dignissim,
            convallis augue et, rutrum sapien. Cras cursus aliquam faucibus.
            Pellentesque ac ex ut elit aliquet fringilla ut et lacus. Aenean vel
            vestibulum lorem. Morbi id gravida lectus. Cras mattis lacus a ante
            dignissim placerat. Suspendisse felis dui, pulvinar consequat
            ultricies at, imperdiet sit amet nisi. Quisque bibendum eu est in
            elementum.
          </p>
          <v-btn rounded color="secondary" @click="dialogVideo = true">
            Saber más
          </v-btn>
        </v-col>
      </v-row>
        <v-dialog v-model="dialogVideo" v-if="dialogVideo">
      <v-card>
        <v-btn
          color="#fff"
          absolute
          right
          icon
          top
          @click="dialogVideo = false"
          style="z-index: 100"
        >
          <v-icon> fa fa-close </v-icon>
        </v-btn>
        <video
          :src="portada"
          width="100%"
          height="100%"
          autoplay
          muted
          loop
        ></video>
      </v-card>
    </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  name:'about',
  data(){
    return{
       dialogVideo: false,
        portada: require("@/assets/1100824913-preview.mp4"),
    }
  }
}
</script>
<style lang="scss">
.about-us {
  .header{
    height: 70vh;
    width: 100%;
    background-color: #1c1c1c;
    background-image: url(https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80);
    background-size: cover;
    background-position: center;
  }
  color: #fff;
    overflow: clip;
    padding-bottom: 70px;
  background-color: #1c1c1c;
}
</style>