
<template lang="html">
<div class="home">
  <a href="https://github.com/pdhoward/gallery" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
  <div class="logo">
    <img src="../assets/logo.png" />
  </div>
  <h3 class="title">Gallery: Connections</h3>
   <div class="previews">
     <div :key="key" v-for="(img, key) in images" >
          
            <div class="preview">
                <router-link v-bind:to="`{{img.demo}}`">
                    <div class="preview-wrapper">
                         <img :src="imageDir + img.imagesrc">  
                         <span>{{img.title}}</span>
                    </div>
                </router-link>
            </div>
     </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue';

let imagesObj
function requireAll(r, p) {
      var imgs = []     
      r.keys().forEach(key => {   
          let obj = r(key)
          imgs.push(obj)
        })
      p.keys().forEach(key => {          
          let obj = p(key)
          imgs.map((i) => {
            if (obj.includes(i.image)){
                i.imagesrc = obj
            }
          })         
        })
      imagesObj = imgs; 
      console.log(imagesObj)     
    }

requireAll(require.context('@/assets/preview', true, /\.json$/), require.context('@/assets/preview', true, /\.png$/));

export default Vue.component('resume', {
    name: 'app',
    data() {
        return {
        imageDir: "", // reference the root, because webpack places images in static directory
        images: imagesObj
        }
  }
   
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
  height: 320px;
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
  font-weight: bold;
  color: blue;
  width: 100%;
  text-align: center;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
</style>
