import { IApplicationAction } from 'src/actions';
import { Actions } from 'src/constants';

/**
 * Properties existing on the closeApplication action.
 *
 * @export
 * @interface ICloseApplicationAction
 * @extends {IApplicationAction}
 */
export interface ICloseApplicationAction extends IApplicationAction {
  /** The body of the action affecting which application should close. */
  payload: ICloseApplicationActionPayload;

  /** The action stating what should happen. */
  type: Actions.CLOSE_APPLICATION;
}

/**
 * The payload of the closeApplication action.
 *
 * @export
 * @interface ICloseApplicationActionPayload
 */
export interface ICloseApplicationActionPayload {
  /** The id of the application that should close. */
  id: number;
}

/**
 * Creates an action with the means to close the applications with the provided
 * id.
 *
 * @export
 * @param id The id of the application to be closed.
 * @returns An action to close the application with the provided id.
 */
export function closeApplication(id: number): ICloseApplicationAction {
  return {
    payload: {
      id
    },
    type: Actions.CLOSE_APPLICATION
  };
}
