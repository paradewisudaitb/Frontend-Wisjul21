import { AnyAction } from 'redux';

const stageInitialState = {
  stage1: false,
  stage2: false,
  stage3: false,
};

const initialState = {
  ...stageInitialState,
  action: '',
};

const stageReducer = (state: any = initialState, action: AnyAction): any => {
  const _action = {
    ['STAGE_WIN' as string]: () => {
      return {
        ...state,
        action: action.type,
        stage1: true,
        stage2: true,
        stage3: true,
      };
    },
    DEFAULT: () => state,
  };
  return (_action[action.type] || _action.DEFAULT());
};

export default stageReducer;