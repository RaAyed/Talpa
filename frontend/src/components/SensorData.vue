<template>
    <div>
        <datepicker :value="fromDate" :inline="true"></datepicker>
        <datepicker :value="toDate" :inline="true"></datepicker>
    </div>
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
    data() {
        return {
            sensorData: [],
            fromDate: new Date(),
            toDate: new Date()
        };
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