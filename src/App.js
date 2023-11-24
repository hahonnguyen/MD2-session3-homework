import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import Count from './components/Count';
import CounText from './components/CounText';
// import HomeWorks from './components/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <HomeWorks/> */}
      {/* <Counter/> */}
      <Count/>
      <br/>
      <br/>
      <CounText/>
    </div>
  );
}

export default App;
