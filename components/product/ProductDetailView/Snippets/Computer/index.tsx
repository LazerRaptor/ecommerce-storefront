import { Fragment } from 'react';
import { v4 } from 'uuid';
import styles from '../index.module.scss';

const Computer = ({ computer }) => {
  const specs = [
    ['Central Processor', computer.cpu],
    ['Graphics', computer.gpu],
    ['Hard Drive', computer.hdd]
  ]
  return (
    <Fragment>
      {specs.map(spec => (
        <div className={styles['spec-row']} key={v4()}>
          <span data-content={spec[0]}></span><span>{spec[1]}</span>
        </div>
      ))}
    </Fragment>
  );
};

export default Computer;