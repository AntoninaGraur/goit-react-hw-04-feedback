import React from 'react';

import { NotificationMessege } from '../Statistics/Statistic.styled';

class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <NotificationMessege>{message}</NotificationMessege>;
  }
}

export default Notification;
