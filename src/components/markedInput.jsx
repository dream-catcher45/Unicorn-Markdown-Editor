import React, { useContext } from "react";
import styled from "styled-components";
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


const TextArea = styled.textarea`
width:100%;
height:100%;
resize:none;
border:none;
outline-style: dotted;
outline-color: #5463FF;
font-size:17px;
color: white;
background: #06113C;
`;

export function  MarkedInput(props) {

    const { setMarkdownText } = useContext(editorContext);

    const onInputChange = e =>{
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    }

    return (
        <Container>
          <Title>Input Here</Title>
          <TextArea onChange={onInputChange} />
        </Container>
      );
    }