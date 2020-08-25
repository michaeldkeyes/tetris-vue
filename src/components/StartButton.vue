<template>
  <button class="start-btn">Start Game</button>
</template>

<script>
export default {
  name: "StartButton",
  props: {
    callback: Function,
  },
};
</script>

<style scoped>
.start-btn {
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: #fff;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
}
</style>