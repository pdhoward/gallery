<template>
<div class="page-wrapper">
  <div class="page" :id="$route.params.webappid">
    <div class="page-inner">
      <component :is="$route.params.webappid"></component>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import '../webapp/webapps';
export default Vue.component('webapp', {
    name: 'app'
});
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: white;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  margin: auto;
  position: relative;
  width: 21cm;
  height: 25.00cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
