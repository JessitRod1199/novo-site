<template>
  <v-app>
    <!-- aqui va el nav -->
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <footerComponent />
  </v-app>
</template>

<script>
import  navbar  from "@/components/navbar.vue";
import  footerComponent  from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    navbar,
    footerComponent
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
@import "@/_responsive.scss";
body{
    overflow: clip;
  background-color: #1c1c1c;
}
</style>
