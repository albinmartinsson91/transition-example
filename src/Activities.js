import React, { Component } from 'react';
import styled from 'styled-components'

import posed, { PoseGroup } from 'react-pose';


class Activites extends Component {
  render() {
    return (
    	<CardContainer className="p-4 bg-white rounded w-full">
    		<h1 className="w-full bg-grey">Activities are alot of fun.</h1>
    	</CardContainer>
    );
  }
}


const CardContainer = styled.div`
    height:60vh;
    margin:0 auto;
    z-index:40;
`

export default Activites;
