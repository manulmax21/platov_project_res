<template>
  <div>
    <BasketsComponent
      :cart_data="cart_data"
    ></BasketsComponent>
  </div>
</template>

<script>
import BasketsComponent from "@/components/BasketsComponent";
import {mapActions} from "vuex";

  export default {
    components: {BasketsComponent},
    props:{
      cart_data:{
        type: Array,
        default() {
          return [];
        }
      },
      basket:{
        type: Array
      }
    },
    methods:{
      addToCart(basket){
        this.basket = basket;
        console.log(basket)
      },
      ...mapActions([
        'DEL_TO_CART'
      ]),
      deleteFromCart(index){
        this.DEL_TO_CART(index);
      }
    }
  }
</script>

<style scoped>

</style>
