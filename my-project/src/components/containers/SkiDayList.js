import SkiDayList from '../ui/SkiDayList';
import { removeDay } from '../../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	days: state.allSkiDays,
  filter: ownProps.params.filter
});

const mapDispatchToProps = (dispatch) => ({onRemoveDay: date => dispatch(removeDay(date))});

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList);
