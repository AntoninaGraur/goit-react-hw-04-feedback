import React from 'react';
import {
  FeedbackTitle,
  FeedbackPositiveBtn,
  FeedbackNeutralBtn,
  FeedbackNegativeBtn,
  FeedbackBtnContainer,
} from './FeedbackOptions.styled';

class FeedbackContainer extends React.Component {
  render() {
    const { handleFeedback } = this.props;

    return (
      <div>
        <FeedbackTitle>Please leave a feedback</FeedbackTitle>
        <FeedbackBtnContainer>
          <FeedbackPositiveBtn
            id="positiveBtn"
            type="submit"
            onClick={() => handleFeedback('good')}
          >
            Positive
          </FeedbackPositiveBtn>
          <FeedbackNeutralBtn
            id="neutralBtn"
            type="submit"
            onClick={() => handleFeedback('neutral')}
          >
            Neutral
          </FeedbackNeutralBtn>
          <FeedbackNegativeBtn
            id="negativeBtn"
            type="submit"
            onClick={() => handleFeedback('bad')}
          >
            Negative
          </FeedbackNegativeBtn>
        </FeedbackBtnContainer>
      </div>
    );
  }
}

export default FeedbackContainer;
