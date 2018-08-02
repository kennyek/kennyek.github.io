import { ICloseApplicationAction } from 'src/actions/closeApplication';
import { IState } from 'src/store';

/**
 * Removes the application with the provided id from the state.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
export function closeApplication(state: IState, action: ICloseApplicationAction): IState {
  const newState: IState = JSON.parse(JSON.stringify(state));
  delete newState.applications[action.payload.id];
  return newState;
}
