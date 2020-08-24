<template>
  <div v-for="(row, index) in stage" :key="index">
    <div v-for="(cell, x) in row" :key="x">
      <Cell :type="cell[0]" />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Stage",
  components: {
    Cell,
  },
  props: {
    stage: Array,
  },
};
</script>

<style>
</style>