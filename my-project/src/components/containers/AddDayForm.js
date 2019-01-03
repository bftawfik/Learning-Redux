import AddDayForm from '../ui/AddDayForm';
import { withRouter } from 'react-router';
import { addDay, suggestResortNames, clearSuggestions } from '../../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {console.log(props);return({
  suggestions: state.resortNames.suggestions,
  fetching: state.resortNames.fetching,
  router: props.history
})}

const mapDispatchToProps = dispatch => ({
  onNewDay: ({resort, date, powder, backcountry}) => dispatch(addDay(resort, date, powder, backcountry)),
  onChange: value => value ? dispatch(suggestResortNames(value)) : dispatch(clearSuggestions()),
  onClear: () => dispatch(clearSuggestions())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDayForm));
// export default withRouter(
//     (props) =>
//         <AddDayForm suggestions={[]}
//                 fetching={false}
//                 router={props.router}
//                 onNewDay={day => console.log('todo: add day', day)}
//                 onChange={value => console.log('todo: suggest', value)}
//                 onClear={() => console.log('todo: clear suggestions')} />
// )
