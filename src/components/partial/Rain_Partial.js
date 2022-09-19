import React from 'react';
import '../../App.css';

import { Text } from '@mantine/core';

function RAIN_PARTIAL(props) {

    return (
        <React.Fragment>
            <Text>Rain: Hourly average {props.mean} mm, Total {props.total} mm.</Text>
        </React.Fragment>
    )
}


export default RAIN_PARTIAL;