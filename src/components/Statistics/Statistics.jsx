import PropTypes from 'prop-types';
import { getRandomHexColor } from 'js/randomColors';
import { StatSection, StatHeader, StatList, StatItem, Label, Percentage, } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
            {title && <StatHeader>{title}</StatHeader>}
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }} >
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ),
};