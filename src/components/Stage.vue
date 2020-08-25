<template>
  <div class="stage-container">
    <div v-for="(row, index) in stage" :key="index">
      <div v-for="(cell, x) in row" :key="x">
        <Cell :type="cell[0]" />
      </div>
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

<style scoped>
.stage-container {
  background: #111;
  border: 2px solid #333;
  display: grid;
  grid-template-rows: repeat(20, calc(25vw / 12));
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px;
  width: 100%;
  max-width: 25vw;
}
</style>