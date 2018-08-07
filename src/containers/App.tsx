import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoDocumentText, IoEmail, IoStar } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { placeApplicationOnTop, updateApplicationPosition } from 'src/actions';
import Contact from 'src/components/applications/Contact';
import Cv from 'src/components/applications/Cv';
import PrivateProjects from 'src/components/applications/PrivateProjects';
import SchoolProjects from 'src/components/applications/SchoolProjects';
import AppWindow from 'src/components/AppWindow';
import { IDragData } from 'src/components/AppWindow/TopBar';
import AppDrawer from 'src/components/layout/AppDrawer';
import { IAppInfo, IState } from 'src/store';
import './App.css';

/** Dispatch props from Redux. */
interface IDispatchProps {
  /**
   * Dispatches an action to place the application on top of the other
   * applications.
   *
   * @param id The id of the application that should be placed at top.
   */
  placeApplicationOnTop: (id: number) => void;

  /**
   * Dispatches an action to update an application's position with the provided
   * values.
   *
   * @param id The id of the application that should update position.
   * @param xPosition The new position of the left edge of the application.
   * @param yPosition The new position of the top edge of the application.
   */
  updateApplicationPosition: (id: number, xPosition: number, yPosition: number) => void;
}

/** The props derived from the Redux store. */
interface IStateProps {
  /** All running applications indexed by their id. */
  applications: {
    /** A running application. */
    [id: number]: IAppInfo;
  }
}

/** The combined props for the component. */
type Props = IDispatchProps & IStateProps;

/**
 * Renders the application.
 * 
 * TODO: Remove hard coded icons in for in
 */
const App: StatelessComponent<Props> = props => {
  const { applications } = props;
  const apps = [];

  for (const id of Object.keys(applications)) {
    const application: IAppInfo = applications[id];
    const key = application.id;
    const icon = application.name === 'Contact'
      ? <IoEmail />
      : application.name.endsWith('Projects')
        ? <IoStar />
        : <IoDocumentText />;

    apps.push(<AppWindow key={key} icon={icon} {...application} />);
  }

  /**
   * Makes the App component a "drop zone".
   *
   * @param event The event that occurs when a draggable element is dragged over
   * the App component.
   */
  function dragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  /**
   * Trigger an updateApplicationPositionAction so that the application is
   * displayed where dropped.
   *
   * @param event The event occuring when a draggable element is release over
   * the App component.
   */
  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const dragData: IDragData = JSON.parse(event.dataTransfer.getData('text'));

    const {
      applicationWindowHeight,
      applicationWindowWidth,
      clientXWhenDragStarted,
      clientYWhenDragStarted,
      id
    } = dragData;

    const { clientX, clientY } = event;
    const { xPosition, yPosition } = props.applications[id];

    const calculatedXPosition = xPosition + (clientX - clientXWhenDragStarted);
    const calculatedYPosition = yPosition + (clientY - clientYWhenDragStarted);

    const pageWidth = event.currentTarget.offsetWidth;
    const pageHeight = event.currentTarget.offsetHeight;

    const newXPosition = calculatedXPosition < 0
      ? 0
      : calculatedXPosition + applicationWindowWidth > pageWidth
        ? pageWidth - applicationWindowWidth
        : calculatedXPosition;

    const newYPosition = calculatedYPosition < 0
      ? 0
      : calculatedYPosition + applicationWindowHeight > pageHeight
        ? pageHeight - applicationWindowHeight
        : calculatedYPosition;

    props.updateApplicationPosition(id, newXPosition, newYPosition);
    props.placeApplicationOnTop(id);
  }

  return (
    <div className="App" onDragOver={dragOver} onDrop={drop}>
      <AppDrawer>
        <Cv />
        <PrivateProjects />
        <SchoolProjects />
        <Contact />
      </AppDrawer>
      {apps}
    </div>
  );
}

/**
 * Makes the dispatching functions available as props.
 * 
 * @param dispatch The Redux dispatch function.
 */
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    placeApplicationOnTop: (id: number) => {
      dispatch(placeApplicationOnTop(id));
    },
    updateApplicationPosition: (id: number, xPosition: number, yPosition: number) => {
      dispatch(updateApplicationPosition(id, xPosition, yPosition));
    }
  }
}

/**
 * Provides the applications stored in state as props.
 * 
 * @param state The application state.
 */
function mapStateToProps(state: IState) {
  return {
    applications: state.applications
  };
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
