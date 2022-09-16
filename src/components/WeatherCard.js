import '../App.css';
import Clouds_Partial from './partial/Clouds_Partial.js'
import Temperature_Partial from './partial/Temperature_Partial.js'
import Wind_Partial from './partial/Wind_Partial.js'
import Rain_Partial from './partial/Rain_Partial.js'

function WeatherCard(props) {

    if(Object.keys(props).length === 0) {
        return(
            <div>Loading</div>
        )
    }

    const windProps = {...props.windSpeed, 'windDirection': props.windDirection.mode}

    return (
        <div>
            <Clouds_Partial {...props.cloudCoverage} />
            <Temperature_Partial {...props.tempC} />
            <Wind_Partial {...windProps} />
            <Rain_Partial {...props.rain_1h} />
        </div>
    )
}

export default WeatherCard;