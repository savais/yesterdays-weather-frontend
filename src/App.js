
import './App.css';
import { useEffect, useState } from 'react';
import { MantineProvider, Text, Title, Footer,  Header, Grid, AppShell, Space, MediaQuery, Loader, ActionIcon } from '@mantine/core';
import { getHotkeyHandler, useColorScheme } from '@mantine/hooks';
import { NotificationsProvider, showNotification } from '@mantine/notifications';

// Project Components
import WeatherCard from './components/WeatherCard.js';
import CitySelect from './components/CitySelect.js'


function App(props) {

  const [weather, setWeather] = useState(undefined);
  const [city, setCity] = useState('Helsinki');
  const [cities, setCities] = useState(undefined);


  // Light-Darkmode
  let prefColorScheme = props.Mode;
  const [colorScheme, setColorScheme] = useState(prefColorScheme);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';

  const base_url = 'http://localhost:5000/api'

  const Theme = {
    colorScheme: colorScheme,
    components: {
      Paper: {
        styles: (theme) => ({
          root: {
            backgroundColor:
              (theme.colorScheme === 'dark') 
              ? '#404666'
              : theme.colors.indigo[0]
          }
        })
      }
    }
  }

  console.log(prefColorScheme + "  -  " + colorScheme)


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
    <MantineProvider inherit theme={Theme} withGlobalStyles withNormalizeCSS>
      <AppShell
      footer={
        <Footer height={60} p="md">
          Weather data and Weather symbols by ilmatieteenlaitos CCBY4.0
        </Footer>
        }

        header={
          <Header height={70} p="md" style={{ display: 'flex', justifyContent: 'space-between' }}> <Title>Eilisen Sää</Title> <Space w='xl' /> <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <Text>L</Text> : <Text>D</Text>}
        </ActionIcon> <Space w='xl' /> <CitySelect value={city} onChange={setCity} data={cities} onKeyDown={getHotkeyHandler([['Enter', handleCityChange]])} /></Header>
        }

      >
        <NotificationsProvider position="top-center" zIndex={2077}>
            <MediaQuery smallerThan='lg' styles={{flexDirection:'column-reverse', justifyContent:'center'}}>
              <Grid grow className="App-body">
                <Grid.Col span={4}>
                      {weather !== undefined 
                        ? <WeatherCard  {...weather.daybefore} Title='Toissa Päivänä'/>
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
        </NotificationsProvider>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
