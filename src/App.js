
import './App.css';
import { useEffect, useState } from 'react';
import { MantineProvider, Text, Title, Footer,  Header, Grid, AppShell, Space, MediaQuery, Loader } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { NotificationsProvider, showNotification } from '@mantine/notifications';

// Project Components
import WeatherCard from './components/WeatherCard.js';
import CitySelect from './components/CitySelect.js'

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('Helsinki');
  const [cities, setCities] = useState([]);

  const base_url = 'http://localhost:5000/api'

  const handleCityChange = () => {
    fetch(`${base_url}/${city}`)
      .then(response => {
        if(response.status === 404) {
          showNotification({
            message: 'Paikkaa ei löytynyt.',
            color: 'red',
            autoClose: 2000,
            disallowClose: true,
          })
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log('data got')
      })
      .catch(err => {
        console.log(err)
      })
  };


  useEffect(() => {
    handleCityChange();
    fetch(`${base_url}/cities`)
      .then(response => response.json())
      .then(data => setCities(data.map(e => e.charAt(0).toUpperCase() + e.slice(1))))
  }, []);



  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
      footer={
        <Footer height={60} p="md">
          Weather data and Weather symbols by ilmatieteenlaitos CCBY4.0
        </Footer>
        }

        header={
          <Header height={70} p="md" style={{ display: 'flex', justifyContent: 'space-between' }}> <Title>Eilisen Sää</Title> <Space w='xl' />  <CitySelect value={city} onChange={setCity} data={cities} onKeyDown={getHotkeyHandler([['Enter', handleCityChange]])} /></Header>
        }

      >
        <NotificationsProvider position="top-center" zIndex={2077}>
            <MediaQuery smallerThan='md' styles={{flexDirection:'column-reverse', justifyContent:'center'}}>
              <Grid grow className="App-body">
                <Grid.Col span={4}>
                      {weather !== undefined 
                        ? <WeatherCard {...weather.daybefore} Title='Toissa Päivänä'/>
                        : <Space />
                      }
                </Grid.Col>

                <Grid.Col span={4}>
                  {weather !== undefined 
                    ? <WeatherCard {...weather.yesterday} Title='Eilen'/>
                    : <Loader />
                  }
                </Grid.Col>

                <Grid.Col span={4}>
                    {weather !== undefined 
                      ? <WeatherCard {...weather.today} Title='Tänään'/>
                      : <Space />
                    }
                </Grid.Col>
              </Grid>
            </MediaQuery>

            {/* <nav className="App-nav">
              <ul>
                <li>Home</li>
                <li></li>
                <li>Info</li>
              </ul>
            </nav> */}
        </NotificationsProvider>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
