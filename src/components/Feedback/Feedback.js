import React from 'react';
import propTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({feedbacks, onLeaveFeedback}) => {
    return(
        <div>
            
            {Object.keys(feedbacks).map((estimate) => {
                return(
                    <button
                        className={styles.btn}
                        key = {estimate}
                        type="button"
                        onClick={()=> onLeaveFeedback(estimate)}
                        >
                        {estimate}
                    </button>
                    )})}
        </div>
    )
}

FeedbackOptions.propTypes = {  
    feedbacks: propTypes.objectOf(propTypes.number).isRequired,
    onLeaveFeedback: propTypes.func.isRequired
  }

export default FeedbackOptions;