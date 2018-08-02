import { ICloseApplicationAction } from 'src/actions/closeApplication';
import { ILaunchApplicationAction } from 'src/actions/launchApplication';
import { IUpdateApplicationPositionAction } from 'src/actions/updateApplicationPosition';
import { Actions } from '../constants';
import { IState } from '../store';
import { closeApplication } from './closeApplication';
import { launchApplication } from './launchApplication';
import { updateApplicationPosition } from './updateApplicationPosition';

/**
 * Handles the performed action to update the stored state correctly.
 *
 * @export
 * @param state The current state of the application before the performed action.
 * @param action What part of the store should be updated and the data that should be affected.
 * @returns The new state.
 */
export function reducer(state: IState, action: ICloseApplicationAction | ILaunchApplicationAction | IUpdateApplicationPositionAction): IState {
  const { CLOSE_APPLICATION, LAUNCH_APPLICATION, UPDATE_APPLICATION_POSITION } = Actions;

  switch (action.type) {
    case LAUNCH_APPLICATION:
      return launchApplication(state, action);
    case CLOSE_APPLICATION:
      return closeApplication(state, action);
    case UPDATE_APPLICATION_POSITION:
      return updateApplicationPosition(state, action);
    default:
      return state;
  }
}
