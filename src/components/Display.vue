<template>
  <div>{{text}}</div>
</template>

<script>
export default {
  name: "Display",
  props: {
    gameover: Boolean,
    text: String,
  },
};
</script>

<style>
</style>