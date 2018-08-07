import { IApplicationAction } from 'src/actions';
import { Actions } from 'src/constants';

/**
 * Properties existing on the placeApplicationOnTop action.
 *
 * @export
 * @interface IPlaceApplicationOnTopAction
 * @extends {IApplicationAction}
 */
export interface IPlaceApplicationOnTopAction extends IApplicationAction {
  /** The body of the action affecting which application should be placed on top. */
  payload: IPlaceApplicationOnTopActionPayload;

  /** The action stating what should happen. */
  type: Actions.PLACE_APPLICATION_ON_TOP;
}

/**
 * The payload of the placeApplicationOnTop action.
 *
 * @export
 * @interface IPlaceApplicationOnTopActionPayload
 */
export interface IPlaceApplicationOnTopActionPayload {
  /** The id of the application that should get placed at top. */
  id: number;
}

/**
 * Creates an action with the means to place the application on top of all other
 * applications.
 *
 * @export
 * @returns An action to place the application on top of all other applications.
 */
export function placeApplicationOnTop(id: number): IPlaceApplicationOnTopAction {
  return {
    payload: {
      id
    },
    type: Actions.PLACE_APPLICATION_ON_TOP
  };
}
