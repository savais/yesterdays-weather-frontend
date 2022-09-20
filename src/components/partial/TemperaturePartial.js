import React from 'react';
import '../../App.css';

import { Text } from '@mantine/core';

function TemperaturePartial(props) {



    return (
        <React.Fragment>
            <Text>{props.min} C - {props.max} C, On average {props.mean} C </Text>
        </React.Fragment>
    )
}


export default TemperaturePartial