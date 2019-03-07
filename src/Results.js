import React, { Component } from 'react';
import styled from 'styled-components'

class Results extends Component {
  render() {
    return (
    	<CardContainer className="p-4 bg-white rounded w-full">
      		<h1 className="w-full bg-grey">Results are all that matters.</h1>
      		<ul>
      			<li>adasdasdas</li>
      			<li>asdasdasdas</li>
      			<li>asdasdasd</li>
      			<li>asdasdasd</li>
      			<li>adasdasdas</li>
      			<li>asdasdasdas</li>
      			<li>asdasdasd</li>
      			<li>asdasdasd</li>
      			<li>adasdasdas</li>
      			<li>asdasdasdas</li>
      		</ul>
      	</CardContainer>
    );
  }
}

const CardContainer = styled.div`
    height:60vh;
    margin:0 auto;
`

export default Results;
