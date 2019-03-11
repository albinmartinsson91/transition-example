import React, { Component } from 'react';
import styled from 'styled-components'
import Result from './Result'

class Results extends Component {
  render() {
    return (
    	<CardContainer className="p-4 bg-white overflow-scroll scrolling-touch rounded w-full">
      		<h1 className="w-full bg-grey">Results are all that matters.</h1>
      		<ul className="w-full list-reset">
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
              <Result />
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
