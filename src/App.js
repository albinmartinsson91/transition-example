import React, { Component } from 'react'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Activities from './Activities'
import Results from './Results'
import Home from './Home'


const ContentContainerRouteTransition = posed.div({
	before: { x:'100%', opacity: 0, transition: { type: 'spring', stiffness: 125}},
	enter: { opacity:1, x:0, transition: { type: 'spring', stiffness: 125}},
	exit: { opacity:0, x:'-100%', transition: { type: 'spring', stiffness: 125}},
});


class App extends Component {

	state = {
		contentVisible: true
	}

	toggleContent = e => {
		e.preventDefault()
		this.setState({
			contentVisible: !this.state.contentVisible
		})
	}

	render() {
		return (
			<div className="absolute h-full w-full overflow-hidden">
					{ /* This is the navigation */ }
					<div className="fixed z-50  w-full pin-t p-4">
						<Link to="/">Home</Link>
						<Link className="ml-2" to="/activities">Activities</Link>
						<Link className="ml-2" to="/results">Results</Link>
						<Link className="ml-2" to="/">Reset</Link>
						<button className="ml-2"onClick={this.toggleContent}>Toggla lista</button>
					</div>
					

					{ /* This is the container for our Home Component*/ }
					<TransitionGroup>
		                <CSSTransition
		                  key={this.props.location.pathname.split('/')[1]}
		                  classNames="home"
		                  timeout={300}
		                >
							<Switch location={this.props.location}>
								<Route exact path="/" component={Home} />
							</Switch>
						</CSSTransition>
              		</TransitionGroup>

					{ /* This is the container for our content */ }
					

					<ToggleContentContainer pose={this.state.contentVisible ? 'visible' : 'hidden'}>
						<PoseGroup preEnterPose="before">
							<ContentContainer key={this.props.location.pathname.split('/')[1]}>
								<Switch location={this.props.location}>
									<Route exact path="/activities" key="activities" component={Activities} />
			            			<Route exact path="/results" key="results" component={Results} />
								</Switch>
							</ContentContainer>
						</PoseGroup>
					</ToggleContentContainer>



					<MapContainer>
						Markera mig
					</MapContainer>
				    { /* This is the map */ }
			</div>
		)
	}
}


const ToggleContentContainerAnimated = posed.div({
	visible: { y:0, transition: { type: 'spring', stiffness: 125}},
	hidden: { y:'100%',  transition: { type: 'spring', stiffness: 125}}
});


const ToggleContentContainer = styled(ToggleContentContainerAnimated)`
	position:absolute;
	height:100%;
	width:100%;
	z-index:20;
	top:0;
	left:0;
`

const MapContainer = styled.div`
	background:pink;
	position:fixed;
	display:flex;
	justify-content:center;
	align-items:center;
	height:100vh;
	width:100vw;
	top:0;
	z-index:10;
	left:0;
`

const ContentContainer = styled(ContentContainerRouteTransition)`
	position:absolute;
	display:flex;
	padding:0 1rem;
	overflow:hidden;
	align-items:flex-end;
	justify-content:center;
	height:100%;
	width:100%;
	top:0;
	left:0;
`

export default withRouter(App)

