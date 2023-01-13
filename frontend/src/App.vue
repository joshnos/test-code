<template>
  <ItineraryCharts/>
</template>

<script>
import ItineraryCharts from './components/ItineraryCharts.vue';

export default {
  name: 'App',
  components: {
    ItineraryCharts
}
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
</style>
