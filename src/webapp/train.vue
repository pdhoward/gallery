<template>
<div>
    <div class="gallery">    
    </div>
    <div class="smartphone">
    <div class="content">   
        <iframe src="https://www.heavybit.com/library/" style="width:100%;border:none;height:100%" />
    </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'train'; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/* The device with borders */
.gallery {
  height: 40px;
}
.smartphone {
  position: relative;
  width: 360px;
  height: 640px; 
  margin: auto;  
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px; 
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  width: 360px;
  height: 640px;
  background: white;
}
</style>
