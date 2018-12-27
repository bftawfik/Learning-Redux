import { Component } from 'react'
import Menu from './ui/Menu'
import SkiDayList from './containers/SkiDayList'
import SkiDayCount from './containers/SkiDayCount'
import AddDayForm from './containers/AddDayForm'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import '../stylesheets/index.scss'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	render() {
		console.log(this.props.match);
		return (
			<div className="app">
        <ShowErrors />
        <GoalProgress />
				<Menu/>
				{
					this.props.location.pathname === "/" ?
					<SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/> :
					this.props.location.pathname === "/add-day" ?
					<AddDayForm onNewDay={this.addDay}/> :
					<SkiDayList filter={this.props.match.params.filter}/>
				}
			</div>
		)
	}
}

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>
