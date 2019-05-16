import React from 'react';

import {Title, SmallTitle} from './styles'

function App() {
  return (
    <div>
     <Title fontSize={20}>
       
       Hello world!
       <span>texto menor</span>
      </Title>

      <SmallTitle>Titulo menor</SmallTitle>
    </div>
  );
}

export default App;
