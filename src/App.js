import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="berlin" />
        <footer>
          This Project was coded by Mitra and is{" "}
          <a href="https://github.com/mita4824/final-react-app">
            open source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
