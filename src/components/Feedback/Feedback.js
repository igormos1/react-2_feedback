import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ onLeaveFeedback }) => {
    const { button } = styles;
    return (
        <>
            <button
                type="button"
                className={button}
                onClick={onLeaveFeedback}
                name="good"
            >Good
                
            </button>
            
            <button
                type="button"
                className={button}
                onClick={onLeaveFeedback}
                name="neutral"
            >Neutral
                
            </button>
            
            <button
                type="button"
                className={button}
                onClick={onLeaveFeedback}
                name="bad"
            >Bad
            </button>
        </>
    )
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;