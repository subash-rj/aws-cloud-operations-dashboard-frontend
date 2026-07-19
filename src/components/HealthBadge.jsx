function HealthBadge({status}){

    let color="white";

    if(status==="Healthy")
        color="green";

    else if(status==="Warning")
        color="orange";

    else if(status==="Critical" || status === "Down")
        color="red";

    return(
        <span style={{color}}>
            {status}
        </span>
    );

}

export default HealthBadge;