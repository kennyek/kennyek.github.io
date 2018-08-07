import { IApplicationAction } from 'src/actions';
import { Actions } from 'src/constants';

/**
 * Properties existing on the updateApplicationPosition action.
 *
 * @export
 * @interface IUpdateApplicationPositionAction
 * @extends {IApplicationAction}
 */
export interface IUpdateApplicationPositionAction extends IApplicationAction {
  /** The body of the action affecting the new position of the application. */
  payload: IUpdateApplicationPositionActionPayload;

  /** The action stating what should happen. */
  type: Actions.UPDATE_APPLICATION_POSITION;
}

/**
 * The payload of the updateApplicationPosition action.
 *
 * @export
 * @interface IUpdateApplicationPositionActionPayload
 */
export interface IUpdateApplicationPositionActionPayload {
  /** The id of the application that should update. */
  id: number;

  /** The new position of the left edge of the application. */
  xPosition: number;

  /** The new position of the top edge of the application. */
  yPosition: number;
}

/**
 * Creates an action with the means to update the applications position.
 *
 * @export
 * @returns An action to update the application's position.
 */
export function updateApplicationPosition(id: number, xPosition: number, yPosition: number): IUpdateApplicationPositionAction {
  return {
    payload: {
      id,
      xPosition,
      yPosition
    },
    type: Actions.UPDATE_APPLICATION_POSITION
  };
}
