import styles from './OptionColor.module.scss';

import clsx from "clsx";
import shortid from 'shortid';

const OptionColor = props => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      };

    return (<div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={shortid()}>
                  <button type="button" 
                  className={clsx(prepareColorClassName(color), color === props.color && styles.active)}
                  onClick={() => props.setCurrentColor(color)} >
                  </button>
                </li>
              )}
            </ul>
          </div>)
}

export default OptionColor;