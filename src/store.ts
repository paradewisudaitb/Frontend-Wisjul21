import STAGES from './data/minigame.json';

localStorage.setItem('completedStageCount', '0');
const tmp = localStorage.getItem('completedStageCount');
let isPersistant = !(!tmp);
const getLockedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    return STAGES.filter((e, i) => i <= csc);
  } else {
    return [];
  }
};
const incCompletedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    localStorage.setItem('completedStageCount', (csc + 1).toString());
  }
};
const decCompletedStages = () => {
  const cscRaw = localStorage.getItem('completedStageCount');
  if (cscRaw) {
    isPersistant = false;
    const csc = parseInt(cscRaw);
    localStorage.setItem('completedStageCount', (csc - 1).toString());
  }
};

const completedStageCount = {
  name: 'competedStageCount',
  getLockedStages,
  isPersistant,
  incCompletedStages,
  decCompletedStages,
};

export {
  completedStageCount,
};