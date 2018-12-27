import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faMountain } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SkiDayRow = ({ resort, date, powder, backcountry, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <FontAwesomeIcon icon={faSnowflake} /> : null }
        </td>
        <td>
            {(backcountry) ? <FontAwesomeIcon icon={faMountain} /> : null }
        </td>
    </tr>

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default SkiDayRow
