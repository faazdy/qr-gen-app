<script setup>
import { ref, onMounted, computed } from 'vue';

const dataAPI = ref('')
const inputURL = ref('')

const API = 'https://api.qrserver.com/v1/create-qr-code/?data=Welcome'

//fetch
onMounted(async()=>{
  try{
    const res = await fetch(API)
    dataAPI.value = res.url
    console.log('Welcome, the API is running', res.url)
  } catch(e) {
    console.error(e)
  }
})

// generate qr 
const generateQR = () =>{
  dataAPI.value = `https://api.qrserver.com/v1/create-qr-code/?data=${inputURL.value}`
}
</script>

<template>
  <h1>{{ dataAPI }}</h1>
  <h2>{{ inputURL }}</h2>
  <form @submit.prevent="generateQR">
    <input type="text" v-model="inputURL">
    <button type="submit">generate</button>
  </form>
  <img :src="dataAPI" alt="qr">
</template>

<style scoped>

</style>
