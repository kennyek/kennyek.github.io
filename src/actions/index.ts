import { Actions } from 'src/constants';

/**
 * Properties existing on every action.
 *
 * @export
 * @interface IApplicationAction
 */
export interface IApplicationAction {
  /** The action stating what should happen. */
  type: Actions;
}

export {
  closeApplication,
  ICloseApplicationAction,
  ICloseApplicationActionPayload
} from './closeApplication';
export {
  launchApplication,
  ILaunchApplicationAction,
  ILaunchApplicationActionPayload
} from './launchApplication';
export {
  updateApplicationPosition,
  IUpdateApplicationPositionAction,
  IUpdateApplicationPositionActionPayload
} from './updateApplicationPosition';
