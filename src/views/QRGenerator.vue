<script setup>
import { ref, onMounted, computed } from 'vue';

const dataAPI = ref('')
const inputURL = ref('')
const sizeInput = ref('')
const qrLoader = ref(false)
const qrError = ref(false)

const API = 'https://api.qrserver.com/v1/create-qr-code/?data=WelcomeToQRMe'

//fetch
onMounted(async () => {
  try {
    const res = await fetch(API)
    dataAPI.value = res.url
    console.log('Welcome, the API is running', res.url)
  } catch (e) {
    console.error(e)
  }
})

// generate qr 
const generateQR = () => {
  if(inputURL.value.trim() === '') {
    qrError.value = true
    return
  } 
    dataAPI.value = `https://api.qrserver.com/v1/create-qr-code/?data=${inputURL.value.trim()}&size=${sizeInput.value}`
    qrError.value = false
}

// download qr
const downloadQR = async () => {
  try {
    const response = await fetch(dataAPI.value, { 
      mode: "cors",
      redirect: "follow"
    })

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = objectUrl
    a.download = "qrme-code.png"
    a.click()

    URL.revokeObjectURL(objectUrl)
  } catch (e) {
    console.error("Error descargando QR:", e)
  }
}


</script>

<template>
  <main>
    <section class="title">
      <h1>QR Generator Tool.</h1>
      <p>QR To: <span class="important">{{ inputURL }}</span></p>
      <h3></h3>
    </section>
    
    <section class="container">
      <form @submit.prevent="generateQR">
        <label for="input-text">Insert URL or Text</label>
        <p class="error" v-if="qrError">Please insert a valid text or URL.</p>
        <input type="text" id="input-text" v-model="inputURL" placeholder="www.example.com | example">
        <label for="size">QR size: <span>{{ sizeInput === '' ? '200x200' : sizeInput }}</span></label>
        <select name="" id="size" v-model="sizeInput">
          <option value="">Default</option>
          <option value="30x30">Small</option>
          <option value="500x500">Medium</option>
          <option value="900x900">Large</option>
        </select>
        <button type="submit" class="btn-primary">Generate</button>
      </form>
      <div class="qr-container">
        <div class="img">
          <div class="loader" v-if="qrError"></div>
          <img :src="dataAPI" alt="qr" v-else/>
        </div>
        <div class="btn">
          <button @click="downloadQR" :class="qrError ? 'btn-primary disabled' : 'btn-primary'" :disabled="qrError">Save PNG</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main{
  min-height: 100vh;
}
.container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
  overflow: auto;

  form{
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  label span{
    color: rgb(58, 58, 58);
    font-size: 15px;
    font-weight: bold;
  }
  .qr-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2em;
    gap: 1em;
    width: 100%;

    .btn{
      margin-top: 1.5em;
      text-align: center;
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px){
  .container form{
    width: 100%;
  }
}
@media screen and (max-width: 300px){
  .container{
    grid-template-columns: 1fr;

    .form{
      width: 100%;
    }
    input{
      width: 100%;
    }
  }
}
</style>
