<script setup>
import { ref, onMounted, computed } from 'vue';
import { motion } from 'motion-v'

// API res
const dataAPI = ref('')

//form values
const inputURL = ref('')
const sizeInput = ref('')
const colorInput = ref('#000000')
const bgColorInput = ref('#ffffff')

//handle Error
const qrError = ref(false)

const API = 'https://api.qrserver.com/v1/create-qr-code/?data=WelcomeToQRMe&size=200x200'

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
  if (inputURL.value.trim() === '') {
    qrError.value = true
    return
  }
  dataAPI.value = `https://api.qrserver.com/v1/create-qr-code/?data=${inputURL.value.trim()}&size=${sizeInput.value}&color=${colorInput.value.slice(1)}&bgcolor=${bgColorInput.value.slice(1)}`
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
    <motion.section class="title" :initial="{ opacity: 0, y: -50 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }">
      <h1>QR Generator Tool.</h1>
      <p>QR To: <span class="important">{{ inputURL }}</span></p>
    </motion.section>

    <section class="container">
      <form @submit.prevent="generateQR">
        <article class="form-text">
          <label for="input-text">Insert URL or Text</label>
          <p class="error" v-if="qrError">Please insert a valid text or URL.</p>
          <input type="text" id="input-text" v-model="inputURL" placeholder="www.example.com | example" >
        </article>
        <details>
          <summary>More Settings.</summary>
          <article class="form-optional">
          <div class="form-select-size">
            <label for="size">QR size: <span>{{ sizeInput === '' ? '200x200' : sizeInput }}</span></label>
            <select name="" id="size" v-model="sizeInput">
              <option value="">Normal</option>
              <option value="30x30">Very Small</option>
              <option value="50x50">Small</option>
              <option value="400x400">Medium</option>
              <option value="900x900">Large</option>
            </select>
          </div>
          <div class="form-colors">
            <div class="form-color">
              <label for="color">Color: <span :style="{color: colorInput}">{{ colorInput === '#000000' ? 'Black' : colorInput }}</span></label>
              <input type="color" id="color" v-model="colorInput">
            </div>
            
            <div class="form-bgcolor">
              <label for="bgcolor">Background: <span :style="{color: bgColorInput === '#ffffff' ? 'black' : bgColorInput}">{{ bgColorInput === '#ffffff' ? 'White' : bgColorInput }}</span></label>
              <input type="color" id="bgcolor" v-model="bgColorInput">
            </div>
          </div>
        </article>
        </details>
        <br>
        <button type="submit" class="btn-primary">Generate</button>
        <p class="tip">
          Note: On mobile or small screens, the preview size may not reflect changes.
          Download the PNG to view the QR at your selected dimensions.
        </p>
      </form>
      <div class="qr-container">
        <div class="img">
          <div class="loader" v-if="qrError"></div>
          <img :src="dataAPI" class="inEnter" alt="qr" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }"
            :transition="{ duration: 0.45 }" :key="dataAPI" v-else />
        </div>
        <div class="btn">
          <button @click="downloadQR" :class="qrError ? 'btn-primary disabled' : 'btn-primary'" :disabled="qrError">Save PNG</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
  overflow: auto;

  form {
    flex: 50%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .form-text,
    .form-optional{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }


    .form-optional{
      transition: .3s ease-in-out;
      padding-top: 1em;

      .form-select-size{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 1em;
      }
      .form-colors{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .form-color,
      .form-bgcolor{
        display: flex;
        flex-direction: column;
      }

    }
  }

  label span {
    color: rgb(58, 58, 58);
    font-size: 15px;
    font-weight: bold;
  }

  .qr-container {
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2em;
    gap: 1em;
    width: 100%;

    img {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      margin-top: 1.5em;
      text-align: center;
      width: 100%;
    }
  }
}

.tip {
  font-style: italic;
  font-size: 13px;
  color: rgb(105, 105, 105);
}

@media screen and (max-width: 768px) {
  .container form {
    width: 100%;
  }
}

@media screen and (max-width: 300px) {
  .container {
    grid-template-columns: 1fr;

    .form {
      width: 100%;
    }

    input {
      width: 100%;
    }
  }
}
</style>
