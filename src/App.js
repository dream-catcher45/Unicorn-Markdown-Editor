import React, { useState} from "react";
import "./App.css";
import styled from "styled-components";
import { MarkedInput } from './components/markedInput';
import { Result } from './components/result';
import EditorContext from "./editorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #06113C;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 25px;
  font-family: monospace;
  font-style: normal;
  text-align: center;
  color: #FF1818;
  
`;


const Par = styled.h1`
  font-size: 15px;
  font-family: monospace;
  font-style: italic;
  text-align: center;
  color: #46ff97;
  
`;


const EditorContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

export default function App() {

  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
   markdownText,
   setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
    <AppContainer>
      <Title>
      Markdown Editor
      </Title>
      <Par>A simple md-editor made with &#128156; in React.js</Par>
     <EditorContainer>
         <MarkedInput />
         <Result />
     </EditorContainer>
    </AppContainer>
    </EditorContext.Provider>
  );
}

