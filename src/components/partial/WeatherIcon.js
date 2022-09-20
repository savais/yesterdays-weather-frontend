import React from 'react';
import * as Icon from './svg/index.js'


function WeatherIcon(props) {

    let scalar = '400%'

    let IconArr = [[<Icon.W1 style={{scale: scalar}}/>, <Icon.W2 style={{scale: scalar}}/>, <Icon.W3 style={{scale: scalar}}/>],
                [<Icon.W21 style={{scale: scalar}}/>, <Icon.W21 style={{scale: scalar}}/>, <Icon.W31 style={{scale: scalar}}/>],
                [<Icon.W22 style={{scale: scalar}}/>, <Icon.W22 style={{scale: scalar}}/>, <Icon.W32 style={{scale: scalar}}/>],
                [<Icon.W23 style={{scale: scalar}}/>, <Icon.W23 style={{scale: scalar}}/>, <Icon.W33 style={{scale: scalar}}/>]]

    let renderable = IconArr[props.Rain][props.Cloud];

    return (
        <React.Fragment>
            {renderable === undefined
            ? <p>loading</p>
            : renderable}
        </React.Fragment>
    )
}


export default WeatherIcon;