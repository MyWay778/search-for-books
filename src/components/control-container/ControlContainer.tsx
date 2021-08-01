import React, {ReactElement} from 'react';
import './styles.scss';
import clsx from 'clsx';
import {Button, Loader} from '../shared';

interface ControlContainerProps {
  isLoading: boolean;
  onClick: () => void;
  mt?: 3;
}

export default function ControlContainer({isLoading, onClick, mt}: ControlContainerProps): ReactElement {
  const controlContainerClass = clsx('control-container', mt && `control-container_margin-top-${mt}`);

  return (
    <div className={controlContainerClass}>
      <Button buttonText="load more" onClick={onClick} ml={5} disabled={isLoading}/>
      <div className="control-container__loader-container">
        {isLoading && <Loader/>}
      </div>
    </div>
  )
}
