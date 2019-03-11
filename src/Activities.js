import React, { Component } from 'react';
import styled from 'styled-components'

import posed, { PoseGroup } from 'react-pose';


class Activites extends Component {
  render() {
    return (
    	<CardContainer>
    		<h1 className="w-full bg-grey">Activities are alot of fun.</h1>
    	</CardContainer>
    );
  }
}


const CardContainer = styled.div`
    height:60vh;
    margin:0 auto;
    z-index:40;
    background:white;
    border-radius:4px;
    width:100%;
    padding:1rem;
`

export default Activites;
