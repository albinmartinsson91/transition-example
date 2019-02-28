import React, { Component } from 'react'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose';

import Home from './Home'
import Test from './Test'
import Steps from './Steps'


const ContentContainerRouteTransition = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
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
		console.log('parent', this.props.location.pathname.split('/')[1])
		return (
			<React.Fragment>
				
				{ /* This is the navigation */ }
				<div className="fixed z-30  w-full pin-t p-4">
					<Link className="ml-2" to="/">Home</Link>
					<Link className="ml-2" to="/test">Test</Link>
					<Link className="ml-2" to="/steps/activities">Activities</Link>
					<Link className="ml-2" to="/steps/results">Results</Link>
					<button className="ml-2"onClick={this.toggleContent}>Toggla lista</button>
				</div>
				
				{ /* This is the container for our content */ }
				<ContentContainer pose={this.state.contentVisible ? 'visible' : 'hidden'}> 
					<PoseGroup>
						<ContentContainerRouteTransition key={this.props.location.pathname.split('/')[1]}>
							<Switch location={this.props.location}>
								<Route exact path="/" component={Home} />
								<Route exact path="/test" component={Test} />
								<Route path="/steps" component={Steps} />
							</Switch>
						</ContentContainerRouteTransition>
					</PoseGroup>
				</ContentContainer>


			    { /* This is the map */ }
				<MapContainer />


			</React.Fragment>
		)
	}
}

const MapContainer = styled.div`
	background:pink;
	position:fixed;
	height:100vh;
	width:100vw;
	top:0;
	left:0;
`

const ContentContainerAnimated = posed.div({
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
});

const ContentContainer = styled(ContentContainerAnimated)`
	position:relative;
	background:beige;
	padding-top:4rem;
	height:100vh;
	width:100vw;
	top:0;
	left:0;
	z-index:10;
`

export default withRouter(App)

