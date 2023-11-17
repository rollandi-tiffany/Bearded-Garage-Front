
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
 
  return(
    <div className='App'>
      <img 
         src={process.env.PUBLIC_URL + '/images/Pic.jpeg'}  alt="Bearded Garage Logo" className="responsive-img materialboxed"/>
         <Login/>
         <Signup/>

    </div>
  )
}

export default App;
