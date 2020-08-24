<template>
  <div>
    <Stage :stage="stage" />
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

import { createStage } from "../gameHelpers";

export default {
  name: "Tetris",
  components: {
    Stage,
    Display,
    StartButton,
  },
  data: function () {
    return {};
  },
  created: function () {
    this.stage = createStage();
  },
};
</script>

<style>
</style>