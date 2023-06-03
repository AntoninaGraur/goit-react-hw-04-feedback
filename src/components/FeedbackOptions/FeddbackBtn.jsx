import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackPositiveBtn,
  FeedbackNeutralBtn,
  FeedbackNegativeBtn,
  FeedbackBtnContainer,
} from './FeedbackOptions.styled';

const FeedbackCounterBtn = ({ onGood, onNeutral, onbad }) => (
  <FeedbackBtnContainer>
    <FeedbackPositiveBtn type="button" onClick={onGood}>
      Positive
    </FeedbackPositiveBtn>
    <FeedbackNeutralBtn type="button" onClick={onNeutral}>
      Neutral
    </FeedbackNeutralBtn>
    <FeedbackNegativeBtn type="button" onClick={onbad}>
      Negative
    </FeedbackNegativeBtn>
  </FeedbackBtnContainer>
);
export default FeedbackCounterBtn;

FeedbackCounterBtn.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onbad: PropTypes.func.isRequired,
};
