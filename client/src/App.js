import React from 'react'
import Main from './views/Main'
import ProductView from './views/ProductView'
import ProductEdit from './views/ProductEdit'
import {Router} from '@reach/router'

function App() {
  return (
    <div>
      <Router>
        <Main path="product"/>
        <ProductView path="product/:id" />
        <ProductEdit path="product/:id/edit"/>
        
      </Router>
    </div>

  );
}

export default App;
