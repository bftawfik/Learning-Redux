import Menu from './ui/Menu'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import '../stylesheets/index.scss'

import SkiDayCount from './containers/SkiDayCount'
import AddDayForm from './containers/AddDayForm'
import SkiDayList from './containers/SkiDayList'

export const App = (props) =>
    <div className="app">
        <ShowErrors />{console.log(props.match.params)}
        {!props.match.params.filter ?
          <SkiDayCount/> :
          props.match.params.filter === "add-day" ?
          <AddDayForm/> :
          props.match.params.filter === "list-days" ?
          <SkiDayList params={{filter: props.match.params.filter2}}/> :
          null
        }
        <GoalProgress />
        <Menu />
    </div>
/*<SkiDayList/>*/
export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
