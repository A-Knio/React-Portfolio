import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  padding-top: 125px;
  display: flex;
  align-items: center;
  
  .aboutme {
    color: black;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 20px;
    line-height: 1.5
  }

  .me {
    height: 400px;
    width: auto;
  }
`;

export default function AboutPage() {
    return (
      <Styles>
        <img className="me" src={'../images'} alt=""/>
        <p className="aboutme">
           
        </p>
      </Styles>
    );
  }
  