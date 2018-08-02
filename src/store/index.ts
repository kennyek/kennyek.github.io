import { createStore } from 'redux';
import { reducer } from '../reducers';

/** 
 * Add devToolsExtension property to the window object in order to be able to
 * use it as a Redux store enhancer.
 */
declare global {
  // tslint:disable-next-line:interface-name
  interface Window { devToolsExtension: any; }
}

/**
 * The properties existing on each running app.
 *
 * @export
 * @interface IAppInfo
 */
export interface IAppInfo {
  /** The data used to display the content of the application. */
  data: object;

  /** The id of the application. Needed to reference it. */
  id: number;

  /** The name of the application. Describes which type of application it is. */
  name: string;

  /** Describes the position of the left edge of the application. */
  xPosition: number;

  /** Describes the position of the top edge of the application. */
  yPosition: number;
}

/**
 * The state object returned from store.getState().
 *
 * @export
 * @interface IState
 */
export interface IState {
  /** An object containing all running applications indexed by their id. */
  applications: {
    /** A running application. */
    [id: number]: IAppInfo;
  }
}

/** The state object stored in localStorage. */
const storedStateAsJson = window.localStorage.getItem('state');

/** Either state stored in localstorage or an empty state object. */
const initialState =
  storedStateAsJson &&
  JSON.parse(storedStateAsJson) as IState ||
  { applications: {} };

/** The Redux Dev Tools Chrome extension. */
const reduxDevToolsEnhancer =
  window.devToolsExtension && window.devToolsExtension();

/** The Redux store holding the state tree. */
export default createStore(reducer, initialState, reduxDevToolsEnhancer);
