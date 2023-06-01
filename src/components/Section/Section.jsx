import React from 'react';

import { Notificationtitle } from 'components/Statistics/Statistic.styled';


class Section extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <Notificationtitle>{title}</Notificationtitle>
        {children}
      </div>
    );
  }
}

export default Section;
