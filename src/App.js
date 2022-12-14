import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import ProductListing from './containers/ProductListing';
import ProductDetails from "./containers/ProductDetails"
import ProductComponent from './containers/ProductComponent';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
       <div className="App">
      <Router>
      <Header />
        <Routes>
       
          <Route path="/" element={<ProductListing></ProductListing>} />
          <Route path="/product/:productId" element={<ProductDetails></ProductDetails>} />
          <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>

    </div>
  );
}

export default App;
