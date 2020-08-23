<template>
  <div>
    <Stage />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
</template>

<script>
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

export default {
  name: "Tetris",
  components: {
    Stage,
    Display,
    StartButton,
  },
};
</script>

<style>
</style>