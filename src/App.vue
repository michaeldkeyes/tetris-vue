<template>
  <div id="app">
    <Stage :stage="stage" />
    <aside>
      <Display v-if="gameOver" text="Game Over" />
      <div v-else>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
</template>

<script>
import Stage from "./components/Stage";
import Display from "./components/Display";
import StartButton from "./components/StartButton";

import { createStage } from "./gameHelpers";
import { randomTetromino } from "./tetrominos";

export default {
  name: "App",
  components: {
    Stage,
    Display,
    StartButton,
  },
  data: function () {
    return {
      player: {
        pos: {
          x: 0,
          y: 0,
        },
        tetromino: randomTetromino().shape,
        collided: false,
      },
      dropTime: null,
      gameOver: false,
    };
  },
  created: function () {
    this.stage = createStage();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

@font-face {
  font-family: "Pixel";
  src: url("./assets/Pixel-LCD-7.woff") format("woff");
}

#app {
  background: url("./assets/bg.png");
  background-size: cover;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  padding: 40px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  max-width: 900px;
}

#app aside {
  display: block;
  padding: 0 20px;
  width: 100%;
  max-width: 200px;
}
</style>
