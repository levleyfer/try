import React from 'react';
import HabitTracker from './HabitTracker';
import styled from 'styled-components';
import Login from"./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Function to send the height of the content to the parent page
const sendHeightToParent = () => {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: 'myApp', action: 'setHeight', height }, '*');
};

document.addEventListener('DOMContentLoaded', () => {
  sendHeightToParent();  // Send initial height on DOM load
});

// Listen for messages from the parent page
window.addEventListener('message', (event) => {
  if (event.data === 'requestHeight') {
      sendHeightToParent();
  }
  if (event.data.action === 'setTheme') {
      setTheme(event.data.theme);
  }
  if (event.data.action === 'privateApi' && typeof acceptPrivateApiResponse !== 'undefined') {
      acceptPrivateApiResponse(event.data);
  }
});

// Observe changes to the content's height
const resizeObserver = new ResizeObserver(() => {
  sendHeightToParent();
});
resizeObserver.observe(document.body);

function App() {
  return (
<BrowserRouter>
  <AppContainer>  
    <Routes>
     <Route path="/MainPage" element={<HabitTracker/>} />   
     <Route path="/" element={<Login/>} />   
    </Routes>  
    </AppContainer>
</BrowserRouter>

    
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: center;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif,semibold;
`;