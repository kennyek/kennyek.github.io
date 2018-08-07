import {
  ICloseApplicationAction,
  ILaunchApplicationAction,
  IPlaceApplicationOnTopAction,
  IUpdateApplicationPositionAction
} from 'src/actions';
import { Actions } from '../constants';
import { IState } from '../store';

type ReducerAction =
  ICloseApplicationAction |
  ILaunchApplicationAction |
  IPlaceApplicationOnTopAction |
  IUpdateApplicationPositionAction;

/**
 * Handles the performed action to update the stored state correctly.
 *
 * @export
 * @param state The current state of the application before the performed
 * action.
 * @param action What part of the store should be updated and the data that
 * should be affected.
 * @returns The new state.
 */
export function reducer(state: IState, action: ReducerAction): IState {
  const {
    CLOSE_APPLICATION,
    LAUNCH_APPLICATION,
    PLACE_APPLICATION_ON_TOP,
    UPDATE_APPLICATION_POSITION
  } = Actions;

  switch (action.type) {
    case LAUNCH_APPLICATION:
      return launchApplication(state, action);
    case CLOSE_APPLICATION:
      return closeApplication(state, action);
    case PLACE_APPLICATION_ON_TOP:
      return placeApplicationOnTop(state, action)
    case UPDATE_APPLICATION_POSITION:
      return updateApplicationPosition(state, action);
    default:
      return state;
  }
}

/**
 * Removes the application with the provided id from the state.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
function closeApplication(state: IState, action: ICloseApplicationAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));
  delete newState.applications[action.payload.id];
  return newState;
}

/**
 * Adds a new application with the provided data to the state.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
function launchApplication(state: IState, action: ILaunchApplicationAction): IState {
  const applicationIds = Object.keys(state.applications)
    .map(idString => Number(idString));

  /** The greatest application id, or -1 if there are no applications. */
  const currentMaxId = applicationIds.length <= 0
    ? -1
    : applicationIds.reduce((prev, curr) => prev > curr ? prev : curr);

  const currentMaxZIndex = applicationIds.length <= 0
    ? -1
    : applicationIds.reduce((prev, applicationId) =>
      prev > state.applications[applicationId].zIndex
        ? prev
        : state.applications[applicationId].zIndex
    );

  const newMaxId = currentMaxId + 1;

  return {
    applications: {
      ...state.applications,
      [newMaxId]: {
        id: newMaxId,
        zIndex: currentMaxZIndex + 1,
        ...action.payload
      }
    }
  };
}

/**
 * Places the application with the provided id on top of every other
 * application.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
export function placeApplicationOnTop(state: IState, action: IPlaceApplicationOnTopAction): IState {
  const { id } = action.payload;

  const applicationIds = Object.keys(state.applications)
    .map(idString => Number(idString));

  const currentMaxZIndex = applicationIds.reduce((prev, applicationId) =>
    prev > state.applications[applicationId].zIndex
      ? prev
      : state.applications[applicationId].zIndex
    , Number.MIN_VALUE);

  const newState: IState = JSON.parse(JSON.stringify(state));
  newState.applications[id].zIndex = currentMaxZIndex + 1;

  return newState;
}

/**
 * Updates the position of the application with the provided id with the
 * provided position data.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
export function updateApplicationPosition(state: IState, action: IUpdateApplicationPositionAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));

  const payload = action.payload;
  newState.applications[payload.id].xPosition = payload.xPosition;
  newState.applications[payload.id].yPosition = payload.yPosition;

  return newState;
}
