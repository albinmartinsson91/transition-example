import React, { Component } from 'react';
import styled from 'styled-components'

class Result extends Component {
  render() {
    return (
    	<li className="flex w-full flex-wrap">
			<div className="w-4/12">
			  <ImageContainer>
					 <img className="absolute w-full h-auto" src="http://images.clipartpanda.com/apple-20clip-20art-nicubunu_Apple_Clipart_Free.png" alt=""/>
			  </ImageContainer>
			</div>
			<div className="w-8/12">
			<h3>Tjenare</h3>
			</div>
			</li>
    );
  }
}


const ImageContainer = styled.div`
  padding-bottom:100%;
  background:red;
  width:76px;
  position:relative;

  & img {
	left:50%;
	top:50%;
	transform:translate(-50%, -50%);
  }
`
export default Result;
