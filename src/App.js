import React, { Component } from 'react'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home'
import Steps from './Steps'

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
			<React.Fragment>
				<div className="overflow-hidden">
					{ /* This is the navigation */ }
					<div className="fixed z-50  w-full pin-t p-4">
						<Link to="/">Home</Link>
						<Link className="ml-2" to="/steps/activities">Activities</Link>
						<Link className="ml-2" to="/steps/results">Results</Link>
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
					<ContentContainer>
						<TransitionGroup>
			                <CSSTransition
			                  key={this.props.location.pathname.split('/')[1]}
			                  classNames="fadeUp"
			                  timeout={300}
			                >
			                	<Switch location={this.props.location}>
									<Route path="/steps" component={Steps} />
								</Switch>
			               </CSSTransition>
              			</TransitionGroup>
					</ContentContainer>


				    { /* This is the map */ }
					<MapContainer>
						Markera mig
					</MapContainer>
				</div>

			</React.Fragment>
		)
	}
}

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

const ContentContainerAnimated = posed.div({
	visible: { y:0, transition: { type: 'spring', stiffness: 80, damping:15}},
	hidden: { y:'100%',  transition: { type: 'spring', stiffness: 80, damping:15 }  }
});

const ContentContainer = styled(ContentContainerAnimated)`
	position:relative;
	height:100vh;
	width:100vw;
	top:0;
	left:0;
	z-index:20;
`

export default withRouter(App)

