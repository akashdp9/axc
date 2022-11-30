// import logo from './logo.svg';
import './App.css';
import BasicTabs from './BasicTabs';

function App() {
  return (
    <div className='maindiv'>
      <header >
       <img src='./assets/ax4.PNG' alt='img'/>
      </header>
      <div className='midpart'>
        <img src='./assets/ax2.PNG' alt='img'/>
        <BasicTabs/>
      </div>
    </div>
  );
}

export default App;
