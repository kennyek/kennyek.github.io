import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoClose } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeApplication, updateApplicationPosition } from 'src/actions';
import './TopBar.css';

/** Data passed as JSON in the drag events. */
export interface IDragData {
  /** The height of the ApplicationWindow. */
  applicationWindowHeight: number;

  /** The width of the ApplicationWindow. */
  applicationWindowWidth: number;

  /** The horizontal mouse position when the dragging starts. */
  clientXWhenDragStarted: number;

  /** The vertical mouse position when the dragging starts. */
  clientYWhenDragStarted: number;

  /** The id of the application that is being dragged. */
  id: number;
}

/** Dispatch props from Redux. */
interface IDispatchProps {
  /** Dispatches an action to close the application. */
  closeApplication: () => void;

  /**
   * Dispatches an action to update the application's position with the provided
   * values.
   *
   * @param xPosition The new position of the left edge of the application.
   * @param yPosition The new position of the top edge of the application.
   */
  updateApplicationPosition: (xPosition: number, yPosition: number) => void;
}

/** Props for the TopBar component. */
export interface ITopBarProps {
  /** The icon component to be rendered in the applications topbar. */
  icon: JSX.Element;

  /** The id of the application. */
  id: number;

  /** The name of the application to be displayed in the topbar. */
  name: string;
}

/** The combined props for the component. */
type Props = ITopBarProps & IDispatchProps;

/** The topbar of an application window, displaying the application name, icon
 * and interaction buttons.
 */
const TopBar: StatelessComponent<Props> = props => {
  const { icon, id, name } = props;

  /**
   * Dispatch an action to close the application.
   *
   * @param event The click event that occurs when the close button is clicked.
   */
  function handleCloseButtonClick(event: React.MouseEvent<React.ReactSVGElement>) {
    event.stopPropagation();
    props.closeApplication();
  }

  /**
   * Sets mouse positions from when the user starts dragging the application.
   *
   * @param event The drag event that occurs when the user starts dragging the
   * application.
   */
  function dragStart(event: React.DragEvent<HTMLDivElement>) {
    const clientXWhenDragStarted = event.clientX;
    const clientYWhenDragStarted = event.clientY;

    const dragData: IDragData = {
      applicationWindowHeight: event.currentTarget.parentElement!.offsetHeight,
      applicationWindowWidth: event.currentTarget.parentElement!.offsetWidth,
      clientXWhenDragStarted,
      clientYWhenDragStarted,
      id
    };

    event.dataTransfer.setData(
      'text/plain',
      JSON.stringify(dragData)
    );
  }

  return (
    <div className="TopBar" draggable={true} onDragStart={dragStart}>
      {icon}
      <p className="TopBar-title">{name}</p>
      <IoClose
        className="TopBar-close-button"
        onClick={handleCloseButtonClick}
      />
    </div >
  );
}

/**
 * Makes the dispatching functions available as props.
 * 
 * @param dispatch The Redux dispatch function.
 * @param ownProps The props passed to the component by the parent.
 */
function mapDispatchToProps(dispatch: Dispatch, ownProps: ITopBarProps) {
  return {
    closeApplication: () => {
      dispatch(closeApplication(ownProps.id));
    },
    updateApplicationPosition: (xPosition: number, yPosition: number) => {
      dispatch(updateApplicationPosition(ownProps.id, xPosition, yPosition));
    }
  };
}

export default connect<null, IDispatchProps, ITopBarProps>(
  null,
  mapDispatchToProps
)(TopBar);
