import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <main>
        <h1>React Popups!</h1>
        <br></br>
        <button>Open Popup</button>
      </main>
      <Popup trigger={true}>
        <h3>My popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;
