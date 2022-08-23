<template>
  <div id="app">
    <DragDrop1></DragDrop1>
  </div>
</template>

<script>
import DragDrop1 from "@/components/DragDrop1"

export default {
  name: 'App',
  components: {
    DragDrop1
  },
// <div className="container">
// </div>

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
