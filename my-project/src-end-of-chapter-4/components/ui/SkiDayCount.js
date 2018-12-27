import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSnowflake, faMountain } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/SkiDayCount.scss'

const SkiDayCount = ({ total=0, powder=0, backcountry=0 }) =>
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <FontAwesomeIcon icon={faSnowflake} />
            <span>powder</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <FontAwesomeIcon icon={faMountain} />
            <span>hiking</span>
        </div>
    </div>

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}

export default SkiDayCount
