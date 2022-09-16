import '../../App.css';

function Temperature_Partial(props) {



    return (
        <div>
            <p>
                {props.min} C - {props.max} C, On average {props.mean} C
            </p>
        </div>
    )
}


export default Temperature_Partial