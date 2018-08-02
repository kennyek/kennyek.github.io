import { ILaunchApplicationAction } from 'src/actions/launchApplication';
import { IState } from 'src/store';

/**
 * Adds a new application with the provided data to the state.
 *
 * @param state The previous state.
 * @param action The action with information on how the state should update.
 */
export function launchApplication(state: IState, action: ILaunchApplicationAction): IState {
  const applicationIds = Object.keys(state.applications)
    .map(idString => Number(idString));
  /** The greatest application id, or -1 if there are no applications. */
  const currentMaxId = applicationIds.length <= 0
    ? -1
    : applicationIds.reduce((prev, curr) => prev > curr ? prev : curr);

  const newMaxId = currentMaxId + 1;

  return {
    applications: {
      ...state.applications,
      [newMaxId]: {
        id: newMaxId,
        ...action.payload
      }
    }
  };
}
