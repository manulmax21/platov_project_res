import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart:[]
  },
  getters: {
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      console.log(product)
      console.log(state.cart)
      state.cart.push(product);
    },
    REMOVE_CART: (state, index) => {
      console.log(index)
      state.cart.splice(index, 1);
      console.log(state.cart)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios('https://api.platovcorp.site/product.json', {
        method: "GET"
      })
          .then((products)=>{
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
          })
          .catch((err)=>{
            console.log(err);
            return err;
          })
    },
    ADD_TO_CART({commit}, product){
      console.log('SET CART >')
      commit('SET_CART', product);
    },
    DEL_TO_CART({commit}, index){
      commit('REMOVE_CART', index)
    }
  },
  modules: {
  }
})
