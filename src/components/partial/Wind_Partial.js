import React from 'react';
import '../../App.css';

import { Text } from '@mantine/core';

function WIND_PARTIAL(props) {

    const airDirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    return (
        <React.Fragment>
            <Text>
            Wind Speed: {props.min} - {props.max} m/s, on average: {props.mean} m/s
            </Text>
            <Text>
                Wind Direction: {airDirs[props.windDirection]}
            </Text>
        </React.Fragment>
    )
}

export default WIND_PARTIAL