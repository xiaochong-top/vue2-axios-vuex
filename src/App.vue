<template>
  <div class="box1"/>
  <div class="box2"/>
</template>

<script>
import { github } from '@/api/requestTest'
export default {
  name: 'App',
  created() {
    github('').then(response=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box1 {
  background: bisque;
  height: 100px;
}
.box2 {
  background: gold;
  height: 100px;
}
</style>
