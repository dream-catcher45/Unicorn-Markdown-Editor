//import React from 'react';
import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editorContext from "../editorContext";



const Container = styled.div`
width:50%;
height:100%;
padding:13px;
border-right:  1.5px solid rgba(15,15,15,0.4);
font-family:'Roboto',sans-serif;
`;

const Title = styled.div`
font-size:22px;
font-weight:600;
color: #FF8C32;
font-family: monospace;
margib-bottom:1em;
padding:18px 0;
border-bottom: 1px solid rgba(15,15,15,0.3);
`;


const ResultArea = styled.div`
width:100%;
height:100%;
resize:none;
border:none;
font-size:17px;
color: white;
background: #06113C;
`;

export function Result(props) {

    const { markdownText } = useContext(editorContext);

    
  return (
    <Container>
      <Title>Output</Title>
      <ResultArea>
        <ReactMarkdown source={markdownText} />
      </ResultArea>
    </Container>
  );
}