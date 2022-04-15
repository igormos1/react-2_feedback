import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({children, text}) => {
    return(
        <div className={styles.Section}>
            <h2>{text}</h2>
            <div>{children}</div>
        </div>
    )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Section;