import SkiDayCount from '../ui/SkiDayCount'
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
	total: state.allSkiDays.length,
	powder: state.allSkiDays.filter(day => day.powder).length,
	backcountry: state.allSkiDays.filter(day => day.backcountry).length,
});

export const Container = connect(mapStateToProps)(SkiDayCount)
export default Container;
