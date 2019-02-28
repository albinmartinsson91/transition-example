import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import Activities from './Activities'
import Results from './Results'

const StepsRouteTransition = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const AnimatedRoute = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Steps extends Component {
  render() {
  	console.log('child', this.props.location.pathname)
    return (
    	<div>
	    	{/*<StepsRouteTransition key={this.props.location.pathname}>*/}
		    	<PoseGroup>
					<AnimatedRoute key="activities" withParent={false}>
						<Route exact path="/steps/activities" component={Activities} />
					</AnimatedRoute>
					<AnimatedRoute  key="results" withParent={false}>
						<Route exact path="/steps/results" component={Results} />
					</AnimatedRoute>
				</PoseGroup>
			{/*</StepsRouteTransition>*/}
		</div>
    );
  }
}


export default withRouter(Steps);
