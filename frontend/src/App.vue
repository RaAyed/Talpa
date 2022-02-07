<template>
    <div>
        <Machines />
        <SensorData />
    </div>
</template>

<script>
import Machines from './components/Machines.vue'
import SensorData from './components/SensorData.vue'

export default {
    name: 'App',
    components: {
        Machines,
        SensorData
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
