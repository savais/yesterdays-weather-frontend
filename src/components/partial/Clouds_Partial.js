import React from 'react';
import '../../App.css';

import { Text } from '@mantine/core';

function CLOUDS_PARTIAL(props) {

    return(
        <React.Fragment>
            <Text>Clouds mode: {props.mode}</Text>
        </React.Fragment>
    )
}

export default CLOUDS_PARTIAL;