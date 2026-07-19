import HealthBadge from "./HealthBadge.jsx";

function MetricCard(props){

    let textColor = "white";

    if(props.title === "CPU Usage"){

        const cpuValue = parseInt(props.value);

        if(cpuValue > 80){
            textColor = "red";
        }else if(cpuValue > 60){
            textColor = "orange";
        }else{
            textColor = "green";
        }

    }

    return(
        <div style = {{
            border: "1px solid grey",
            padding: "20px",
            margin: "10px",
            borderRadius: "8px",
            width: "220px"
        }}>
            <h3>{props.icon} {props.title}</h3>
            {
                props.title ==="Health Status" ?
                    <HealthBadge status = {props.value}/>
                                 :
                props.title ==="CPU Usage" ?
                    <h4 style={{color:textColor}}>{props.value}{props.unit}</h4>
                                 :
            <h4>{props.value}{props.unit}</h4>
            }
        </div>
    )
}

export default MetricCard;