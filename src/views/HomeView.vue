<template>
  <div class="home">
      <div>
        <posts-component
          :PRODUCTS="PRODUCTS"
          @addToCart="addToCart"
        ></posts-component>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
import PostsComponent from "@/components/PostsComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  /* eslint-disable */
  name: 'HomeView',
  components: {
    PostsComponent
  },
  props:{
    cart:{
      type: Object
    }
  },
  data(){
    return{
      basket: {},
    }
  },
  computed: {
    ...mapGetters ([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data);
      this.basket = data;
      this.$emit('addToCart', this.basket)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response)=>{
          if (response.data){
            console.log('data arrived!')
          }
        })
  }
}
</script>
