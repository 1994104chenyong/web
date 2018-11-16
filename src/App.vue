<template>
  <div class="container bodys">
    <div class="one">
      <index></index>
    </div>
    <div class="two">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import index from '@/components/index';
export default {
  name: 'container',
  components:{
    index
  }
}
</script>

<style>
.bodys{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.one {
  width: 30%;
}
.two {
  width: 70%;;
}
@import './assets/css/base.css';
</style>
