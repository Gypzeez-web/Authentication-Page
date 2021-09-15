import './App.css';
import Login from './components/facebook_component/login';
import Header from './components/header';
import OralLoginPage from './components/oralLoginPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <OralLoginPage/>
      <Login/>
    </div>
  );
}

export default App;
