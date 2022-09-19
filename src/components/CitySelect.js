import React from "react";
import {  Text, Autocomplete } from '@mantine/core';

function CitySelect(props){

    if(props.data === undefined){
        return(<Text>Loading...</Text>)
    }

    return(
        <React.Fragment>
            <Autocomplete {...props} size='md' style={{width:'50%', maxWidth:'400px'}} />
        </React.Fragment>
    )
}


export default CitySelect;