import * as React from 'react';
import { CSSProperties, StatelessComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeApplication, placeApplicationOnTop } from 'src/actions';
import Main from 'src/components/AppWindow/Main';
import TopBar from 'src/components/AppWindow/TopBar';
import { IState } from 'src/store';
import './AppWindow.css';

/** Dispatch props from Redux. */
interface IDispatchProps {
  /** Dispatches an action to close the application. */
  closeApplication: () => void;

  /** Dispatches an action to place the application on top of the other applications. */
  placeApplicationOnTop: () => void;
}

/** The props derived from the Redux store. */
interface IStateProps {
  /** The position of the left edge of the application. */
  xPosition: number;

  /** The position of the top edge of the application. */
  yPosition: number;

  /** Determining which application displays on top of each other. */
  zIndex: number;
}

/** The props of the AppWindow component. */
export interface IAppWindowProps {
  /** The data to be used in the application. */
  data: object;

  /** The icon component to be rendered in the applications topbar. */
  icon: JSX.Element;

  /** The id of the application. */
  id: number;

  /** The name of the application to be displayed in the topbar. */
  name: string;
}

/** The combined props for the component. */
type Props = IAppWindowProps & IDispatchProps & IStateProps;

/** An application window containing a topbar and main window. */
const AppWindow: StatelessComponent<Props> = props => {
  const { data, icon, id, name, xPosition, yPosition, zIndex } = props;

  /**
   * Close the application if the Escape key was pressed.
   * 
   * @param event The KeyboardEvent fired when the user presses a key.
   */
  function closeWindow(event: React.KeyboardEvent) {
    if (event.key !== 'Escape') { return; }

    props.closeApplication();
  }

  /**
   * Place the application on top of the other applications.
   *
   * @param event The MouseEvent fired when the user clicks the AppWindow.
   */
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    props.placeApplicationOnTop();
  }

  const style: CSSProperties = {
    left: xPosition,
    top: yPosition,
    zIndex
  };

  return (
    <div
      className="AppWindow"
      style={style}
      onClick={handleClick}
      onKeyDown={closeWindow}
      tabIndex={0}
    >
      <TopBar icon={icon} id={id} name={name} />
      <Main data={data} />
    </div>
  );
}

/**
 * Provide the application's xPosition and yPosition dispatched to state as
 * props.
 * 
 * @param state The application state.
 * @param ownProps The props passed to the component by the parent.
 */
function mapStateToProps(state: IState, ownProps: IAppWindowProps): IStateProps {
  const { xPosition, yPosition, zIndex } = state.applications[ownProps.id];

  return {
    xPosition,
    yPosition,
    zIndex
  }
}

/**
 * Makes the dispatching functions available as props.
 * 
 * @param dispatch The Redux dispatch function.
 * @param ownProps The props passed to the component by the parent.
 */
function mapDispatchToProps(dispatch: Dispatch, ownProps: IAppWindowProps) {
  return {
    closeApplication: () => {
      dispatch(closeApplication(ownProps.id));
    },
    placeApplicationOnTop: () => {
      dispatch(placeApplicationOnTop(ownProps.id));
    }
  };
}

export default connect<IStateProps, IDispatchProps, IAppWindowProps>(
  mapStateToProps,
  mapDispatchToProps
)(AppWindow);
