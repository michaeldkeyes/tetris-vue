export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  let stage = Array(10)
    .fill()
    .map(() => Array(10).fill([0, 'clear']));

  return stage;
};
