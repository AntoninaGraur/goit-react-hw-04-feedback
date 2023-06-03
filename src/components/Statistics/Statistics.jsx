import React from 'react';

import { StatisticText } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatisticText>Good: {good}</StatisticText>
      <StatisticText>Neutral: {neutral}</StatisticText>
      <StatisticText>Bad: {bad}</StatisticText>
      <StatisticText>Total: {total}</StatisticText>
      <StatisticText>Positive feedback: {positivePercentage}%</StatisticText>
    </div>
  );
};

export default Statistics;
