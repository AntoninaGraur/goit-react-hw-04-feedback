import PropTypes from 'prop-types';

import FeedbackCounterBtn from './FeddbackBtn';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notofication/Notification';

import { StatisticTitle } from './FeedbackOptions.styled';

import { useState } from 'react';

function FeedbackCouterFunc() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGood(prevState => prevState + 1);
  };
  const onNeutralClick = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onBadClick = () => {
    setBad(prevState => prevState + 1);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedback) * 100) || 0;
  };
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <StatisticTitle>Please leave feedback</StatisticTitle>
      <FeedbackCounterBtn
        onGood={onGoodClick}
        onNeutral={onNeutralClick}
        onbad={onBadClick}
      />

      <Section title="Statistic">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback"/>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default FeedbackCouterFunc;

FeedbackCouterFunc.propTypes = {
  stats: PropTypes.objectOf({
    feedback: {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    },
  }),
};
