import React from 'react';
import '../../App.css';

import { Text } from '@mantine/core';

function CloudsPartial(props) {

    return(
        <React.Fragment>
            <Text>Clouds mode: {props.mode}</Text>
        </React.Fragment>
    )
}

export default CloudsPartial;