import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import WeatherCard from './components/WeatherCard.js';

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('helsinki');

  useEffect(() => {
    console.log('running effect')
    fetch('http://localhost:5000/api/helsinki')
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log('data got')
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // if(weather === undefined){
  //   return (<div>loading</div>)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Eilisen Sää</h1>
      </header>
      <main className="App-body">
        <section className="Left">
          <h3>Toissa Päivänä</h3>
          <section className="Weather-Data">
            {weather !== undefined 
              ? <WeatherCard {...weather.daybefore}/>
              : <p>loading...</p>
            }
          </section>
        </section>
        <section className="Middle">
          <h3>Eilen</h3>
          <section className="Weather-Data">
          {weather !== undefined 
            ? <WeatherCard {...weather.yesterday}/>
            : <p>loading...</p>
          }
          </section>
        </section>
        <section className="Right">
          <h3>
            Tänään
          </h3>
          <section className="Weather-Data">
          {weather !== undefined 
            ? <WeatherCard {...weather.today}/>
            : <p>loading...</p>
          }
          </section>
        </section>
      </main>
      <nav className="App-nav">
        <ul>
          <li>Home</li>
          <li>Paikkakunta Haku - {city}</li>
          <li>Info</li>
        </ul>
      </nav>
      <footer className="App-footer">Weather data by ilmatieteenlaitos CCby4.0</footer>
    </div>
  );
}

export default App;
