<template>
  <ul>
    <li v-for="(sensor, index) in sensorData" :key="index">
      {{ sensor.name }}
    </li>
  </ul>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'SensorData',
    data: {
        sensorData: []
    },
    apollo: {
    sensorData: {
        query: gql`query sensorData($from: DateTime!, $to: DateTime!) {
            sensorData(from: $from, to: $to)
        }`,
        variables: {
            from: fromDate,
            to: toDate
        }
    }
}
</script>