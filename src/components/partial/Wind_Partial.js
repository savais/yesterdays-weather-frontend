import '../../App.css';

function Wind_Partial(props) {

    const airDirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    return (
        <div>
            <p>
            Wind Speed: {props.min} - {props.max} m/s, on average: {props.mean} m/s
            </p>
            <p>
                Wind Direction: {airDirs[props.windDirection]}
            </p>

        </div>
    )
}

export default Wind_Partial