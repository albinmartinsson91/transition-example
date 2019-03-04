import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';
import Activities from './Activities'
import Results from './Results'
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Steps extends Component {


  componentDidUpdate() {

  }

  componentWillReceiveProps(nextProps) {
     console.log('Previous location', this.props.location)
     console.log('Next location', nextProps.location)

  }

  render() {

    return (
      <div className="h-screen w-full relative">
        <CardContainer className="flex absolute w-full overflow-hidden scrolling-touch md:w-10/12 lg:w-8/12 mx-auto pin-r pin-l p-4 pin-b bg-white rounded-t">
            <TransitionGroup>
                <CSSTransition
                key={this.props.location.key}
                classNames="step"
                timeout={300}
                >
                    <Switch location={this.props.location}>
                        <Route exact path="/steps/activities" key="activities" component={Activities} />
                        <Route exact path="/steps/results" key="results" component={Results} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </CardContainer>
      </div>
    );
  }
}

const CardContainer = styled.div`
    height:80vh;
`

export default withRouter(Steps);
