<template>
  <ul>
    <li v-for="(machine, index) in machines" :key="index">
      {{ machine.name }}
    </li>
  </ul>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'Machines',
    data: {
        machines: []
    },
    apollo: {
        machines: gql`query {
            machines
        }`
    }
}
</script>