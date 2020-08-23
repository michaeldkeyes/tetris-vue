<template>
  <div>
    <Cell />
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
    stage: String,
  },
};
</script>

<style>
</style>