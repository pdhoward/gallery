
<template lang="html">
   <div style="height: 400px">
     <div :key="key" v-for="(img, key) in images" >
          
            <div class="preview">
                <router-link v-bind:to="'/resume/pwasample'">
                    <div class="preview-wrapper">
                         <img :src="imageDir + key.substr(1)">  
                        <span>Mobile Retail</span>
                    </div>
                </router-link>
            </div>

     </div>
    </div>
 </template>
<script>
import Vue from 'vue';

//let arr = require.context("../assets/preview", true, /\.png$/)

let imagesObj
function requireAll(r) {
      var imgs = {}
      r.keys().forEach(key => (imgs[key] = r(key)))
      imagesObj = imgs
      console.log(imgs)
    }
requireAll(require.context('@/assets/preview', true, /\.png$/));


export default Vue.component('resume', {
    name: 'app',
  data() {
    return {
      imageDir: "src/assets/preview", // you know this already just from directory structure
      images: imagesObj
    }
  },
    /*
  mounted() {
    this.importAll(require.context(this.imageDir, true, /\.png$/))
  },
  methods: {
    importAll(r) {
      var imgs = {}
      r.keys().forEach(key => (imgs[key] = r(key)))
      this.images = imgs
    }
  }
  */
});
</script>


<style scoped>
.home {
  font-family: 'Roboto' !important;
}

.logo {
  text-align: center;
}

.logo img {
  height: 50px;
  margin-top: 40px;
}

.title {
  font-weight: normal;
  text-align: center;
  width: 100%;
  color: black;
  font-weight: 300;
  font-size: 30px;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
  margin-top: 0px;
  margin-bottom: 40px;
}

.previews {
  background-color: white;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.preview {
  width: 180px;
  float: left;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-bottom: 1.5%; 
  height: 252px;
  overflow: hidden;
}

.preview-wrapper {
  position: relative;
  background: white;
}

.preview img {
  width: 100%;
  opacity: 0.5;
  filter: blur(1px);
}

.preview span {
  position: absolute;
  max-width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: blue;
  width: 100%;
  text-align: center;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
</style>
