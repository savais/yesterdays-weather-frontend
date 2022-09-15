import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eilisen Sää</h1>
      </header>
      <main className="App-body">
        <section className="Left">
          <h3>Toissa Toissa Päivänä</h3>
          <section className="Weather-Data">
            InserWeatherHere
          </section>
        </section>
        <section className="Middle">
          <h3>Toissa Päivänä</h3>
          <section className="Weather-Data">
            InserWeatherHere
          </section>
        </section>
        <section className="Right">
          <h3>
            Eilen
          </h3>
          <section className="Weather-Data">
            InserWeatherHere
          </section>
        </section>
      </main>
      <nav className="App-nav">
        <ul>
          <li>Home</li>
          <li>Paikkakunta Haku</li>
          <li>Info</li>
        </ul>
      </nav>
      <footer className="App-footer">Weather data by ilmatieteenlaitos CCby4.0</footer>
    </div>
  );
}

export default App;
