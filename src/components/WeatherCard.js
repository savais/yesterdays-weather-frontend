import React from 'react';
import { MantineProvider, Text, Title, Paper, Center, Grid, MediaQuery } from '@mantine/core';

import '../App.css';
import CLOUDS_PARTIAL from './partial/Clouds_Partial.js'
import TEMPERATURE_PARTIAL from './partial/Temperature_Partial.js'
import WIND_PARTIAL from './partial/Wind_Partial.js'
import RAIN_PARTIAL from './partial/Rain_Partial.js'
import SvgW1 from './partial/svg/W1.js'


// const reqSvgs = require.context ( '../img/weathersymbols', true, /\.svg$/ )

function WeatherCard(props) {

    // if(props.windSpeed == undefined) {
    //     return(
    //         <Text>Loading</Text>
    //     )
    // }

    let renderableProps = [];
    let windProps = {};

    for(const x of Object.keys(props)) {
        switch(x) {
            case 'windSpeed':
                windProps = {...windProps, ...props.windSpeed};
                if(windProps.windDirection !== undefined) {
                    renderableProps.push(<WIND_PARTIAL {...windProps} />);
                }
                break;

            case 'windDirection':
                windProps = {...windProps,'windDirection': props.windDirection.mode};
                if(windProps.min !== undefined) {
                    renderableProps.push(<WIND_PARTIAL {...windProps} />);
                }
                break;

            case 'cloudCoverage':
                renderableProps.push(<CLOUDS_PARTIAL {...props.cloudCoverage} />);
                break;

            case 'tempC':
                renderableProps.push(<TEMPERATURE_PARTIAL {...props.tempC} />);
                break;

            case 'rain_1h':
                renderableProps.push(<RAIN_PARTIAL {...props.rain_1h} />);
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
                        <MediaQuery smallerThan='xl' largerThan='md' styles={{transform: 'scale(0.75) translate(0px, 25px)'}}>
                            <Center style={{width: '100%', height: '100%', minHeight: 'fit-content'}}>
                                <SvgW1 style={{scale: '400%'}} />  
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