import './App.css';
import Header from './Components/Header';
import { 
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
// import ProductComponent from './Components/ProductComponent';
import ProductDetail from './Components/ProductDetail';
import ProductListing from './Components/ProductListing';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header />
      <Routes>
      <Route path='/' exact Component={ProductListing}></Route>
      <Route path='/product/:productId' Component={ProductDetail}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
