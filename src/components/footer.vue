<template>
  <footer id="footer">
    <v-container class="wrap-footer">
      <img src="@/assets/Logo-Novo-grey.svg" width="200px" />
      <div class="wrap-redes">
        
        <a href="" target="_blank" class="mb-2" style=" width: 100%;"> info@novoconceptoin.com</a>
        <a href="" target="_blank"> <v-icon color="#212121" dark>fa fa-instagram</v-icon></a>
        <a href="" target="_blank"> <v-icon color="#212121" dark>fa fa-facebook</v-icon></a>
        <a href="" target="_blank"> <v-icon color="#212121" dark>fa fa-twitter</v-icon></a>
      </div>
      
      </v-container>
  </footer>
</template>

<script>
export default {
  name: "footer",

  data: () => ({
    openNavMobile: false,
  }),
};
</script>
<style lang="scss" scoped>
@import "@/_responsive.scss";
footer {
  background-color: #a9c62c;
  height: 250px;
  border-bottom: #879f1a 20px solid;
  .wrap-footer{
    display: flex;
  justify-content: space-between;
  justify-items: center;
  height: 100%;
  .wrap-redes{
width: 220px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    align-content: center;
    height: auto;
    flex-wrap: wrap;
    a{
      text-decoration: none;
      cursor: pointer;
      padding: 5px 10px;
      color: #212121;
      transition: 0.3s ease-in-out;
      border-radius: 10px;
      
      &:hover{
        transform: scale(1.1,1.1);
        background-color: #00000030;
        color: #fff;
      }
    }
  }
  }


}
</style>
