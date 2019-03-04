import React, { Component } from 'react';
import styled from 'styled-components'
import { Route, Switch, withRouter, Link, Redirect } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
    	<div className="z-30 absolute h-screen flex flex-col items-center justify-center text-center w-full bg-green">
			<h1>Home is where your heart is.</h1>
			<Link className="ml-2" to="/steps/activities">Activities</Link>
		</div>
    );
  }
}


export default Home;
