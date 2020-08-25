<template>
  <div :class="[type === 0 ? '' : 'cellBorder']" :style="[getColor, getBorder]"></div>
</template>

<script>
import { TETROMINOS } from "../tetrominos.js";

export default {
  name: "Cell",
  props: {
    type: Number,
  },
  computed: {
    getColor() {
      return `background-color: rgba(${TETROMINOS.L.color}, 0.8)`;
    },
    getBorder() {
      return [
        `border-bottom-color: rgba(${TETROMINOS.L.color}, 0.1)`,
        `border-right-color: rgba(${TETROMINOS.L.color}, 1)`,
        `border-top-color: rgba(${TETROMINOS.L.color}, 1)`,
        `border-left-color: rgba(${TETROMINOS.L.color}, 0.3)`,
      ];
    },
  },
};
</script>

<style scoped>
div {
  width: auto;
}

.cellBorder {
  border: 4px solid;
}
</style>