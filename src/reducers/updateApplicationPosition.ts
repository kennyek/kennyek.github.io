import { IUpdateApplicationPositionAction } from 'src/actions/updateApplicationPosition';
import { IState } from 'src/store';
/**
 * Updates the position of the application with the provided id with the provided position data.
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
