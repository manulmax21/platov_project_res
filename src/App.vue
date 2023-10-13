<template>
  <header-component></header-component>
  <router-view
      @addToCart="addToCart"
      :cart="cart"
      :cart_data="CART"
      :basket = basket
      @removeCart="removeCart"
  />
</template>

<style lang="scss">

</style>
<script>
/* eslint-disable */
import HeaderComponent from "@/components/HeaderComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  /* eslint-disable */
  components: {HeaderComponent},
  data(){
    return{
      basket: [],
      cart: {}
    }
  },
  methods:{
    ...mapActions([
      'DEL_TO_CART'
    ]),
    addToCart(item){
      this.basket.push(item)
      console.log(this.basket)
    },
    removeCart(cart){
      this.cart = cart;
      // this.DEL_TO_CART({cart})
    }
  },
  computed:{
    ...mapGetters(['CART'])
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&family=Roboto&display=swap');
*{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  max-width: 1920px;
  margin: auto;
  padding: 0 50px;
}
</style>
