import { IApplicationAction } from 'src/actions';
import { Actions } from 'src/constants';

/**
 * Properties existing on the launchApplications action.
 *
 * @export
 * @interface ILaunchApplicationAction
 * @extends {IApplicationAction}
 */
export interface ILaunchApplicationAction extends IApplicationAction {
  /** The body of the action affecting the content of the launched application. */
  payload: ILaunchApplicationActionPayload;

  /** The action stating what should happen. */
  type: Actions.LAUNCH_APPLICATION;
}

/**
 * The payload of the launchApplication action.
 *
 * @export
 * @interface ILaunchApplicationActionPayload
 */
export interface ILaunchApplicationActionPayload {
  /** The data used to display the content of the application. */
  data: object;

  /** The name of the application. */
  name: string;

  /** The position of the left edge of the application. */
  xPosition: number;

  /** The position of the top edge of the application. */
  yPosition: number;
}

/**
 * Creates an action with the means to launch an application with the provided
 * name.
 *
 * @export
 * @param data The data to be displayed in the application.
 * @param name The name of the application to launch.
 * @returns An action to launch an application with the provided arguments.
 */
export function launchApplication(data: object, name: string): ILaunchApplicationAction {
  return {
    payload: {
      data,
      name,
      xPosition: 50,
      yPosition: 50
    },
    type: Actions.LAUNCH_APPLICATION
  };
}
