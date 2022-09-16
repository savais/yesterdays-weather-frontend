import '../../App.css';

function Rain_Partial(props) {

    return (
        <div>
            Rain: Hourly average {props.mean} mm, Total {props.total} mm.
        </div>
    )
}


export default Rain_Partial;