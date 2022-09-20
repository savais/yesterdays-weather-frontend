import React from 'react';
import { MantineProvider, Text, Title, Paper, Center, Grid, MediaQuery } from '@mantine/core';

import '../App.css';
import CloudsPartial from './partial/CloudsPartial.js'
import TemperaturePartial from './partial/TemperaturePartial.js'
import WindPartial from './partial/WindPartial.js'
import RainPartial from './partial/RainPartial.js'
import WeatherIcon from './partial/WeatherIcon.js'


// const reqSvgs = require.context ( '../img/weathersymbols', true, /\.svg$/ )

function WeatherCard(props) {

    // if(props.windSpeed == undefined) {
    //     return(
    //         <Text>Loading</Text>
    //     )
    // }

    let renderableProps = [];
    let windProps = {};
    let Icon = {Cloud: 0, Rain: 0}

    for(const x of Object.keys(props)) {
        switch(x) {
            case 'windSpeed':
                windProps = {...windProps, ...props.windSpeed};
                if(windProps.windDirection !== undefined) {
                    renderableProps.push(<WindPartial {...windProps} />);
                }
                break;

            case 'windDirection':
                windProps = {...windProps,'windDirection': props.windDirection.mode};
                if(windProps.min !== undefined) {
                    renderableProps.push(<WindPartial {...windProps} />);
                }
                break;

            case 'cloudCoverage':
                renderableProps.push(<CloudsPartial {...props.cloudCoverage} />);
                if(props.cloudCoverage.mode > 2) Icon.Cloud = 1;
                if(props.cloudCoverage.mode > 6) Icon.Cloud = 2;
                break;

            case 'tempC':
                renderableProps.push(<TemperaturePartial {...props.tempC} />);
                break;

            case 'rain_1h':
                renderableProps.push(<RainPartial {...props.rain_1h} />);
                if(props.rain_1h.mean > 1) Icon.Rain = 1;
                if(props.rain_1h.mean > 3) Icon.Rain = 2;
                break;
                
            default:
                break;
        }
    }


    return (
        <React.Fragment>
            <Paper shadow="md" p="md">
                <Grid>
                    <Grid.Col md={12} lg={8} xl={12}>
                        <Title order={3}>{props.Title}</Title>
                    </Grid.Col>
                    <Grid.Col span={4} orderXl={3}>
                        <MediaQuery smallerThan='xl' largerThan='lg' styles={{transform: 'scale(0.75) translate(0px, 25px)'}}>
                            <Center style={{width: '100%', height: '100%', minHeight: 'fit-content'}}>
                                <WeatherIcon {...Icon}/>  
                            </Center>
                        </MediaQuery>
                    </Grid.Col>
                    <Grid.Col  span={8} lg={10} xl={8}>
                            <Text align='left'>
                                {renderableProps.map((e, index) => (<Text key={index}>{e}</Text>))}
                            </Text>
                    </Grid.Col>
                </Grid>
            </Paper>
            
        </React.Fragment>
    )
}

export default WeatherCard;