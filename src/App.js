import './App.css';
import Main from './Main'

function App() {
  console.log("rendered")
  return (
    <>
      <div className='header'>
        <p>SwiftKeys</p>
      </div>
      <Main />
    </>
  );
}

export default App;
