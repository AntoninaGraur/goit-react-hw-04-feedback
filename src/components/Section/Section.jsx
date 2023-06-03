import { Notificationtitle } from 'components/Statistics/Statistic.styled';

const Section = ({ title, children }) => {
return (
<div>
<Notificationtitle>{title}</Notificationtitle>
{children}
</div>
);
};

export default Section;