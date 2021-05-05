import './App.css';
import SignUp from './views/SignUp'

import {useState} from 'react'
import LogIn from './views/LogIn'
import Dashboard from './views/Dashboard/index'

function App() {
  const [navigate, setNavigate] = useState('signUp')
 
  const navigatePage=(route)=>{
    setNavigate(route)

  }
  console.log(navigate)





  return (
    <div className="App">
      <header className="App-header">
       {navigate === 'signUp'&& <SignUp navigate={navigatePage}/>}
       {navigate === 'logIn'&& <LogIn navigate={navigatePage}/>}
       {navigate === 'Dashboard'&& <Dashboard navigate={navigatePage}/>}
       

       

        
      </header>
    </div>
  );
}

export default App;
