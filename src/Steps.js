import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import Activities from './Activities'
import Results from './Results'

const StepsRouteTransition = posed.div({
  enter: { y: 0, opacity: 1, transition: { y: { ease: 'linear' } } },
  exit: { y: '500%', opacity: 0, transition: { y: { ease: 'linear' } } }
});

const AnimatedRoute = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Steps extends Component {
  render() {

    return (
    	<div>
        <PoseGroup>
          <StepsRouteTransition key={this.props.location.pathname}>
      	     <Route exact path="/steps/activities" key="activities" component={Activities} />
      	     <Route exact path="/steps/results" key="results" component={Results} />
          </StepsRouteTransition>
        </PoseGroup>
		</div>
    );
  }
}


export default withRouter(Steps);
