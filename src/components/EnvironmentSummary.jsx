function EnvironmentSummary({environment,region,account,resourceCount,lastUpdated}){

    return(
        <div>
            <h2>Environment Summary</h2>
            <p>Environment: {environment}</p>
            <p>Region: {region}</p>
            <p>Account: {account}</p>
            <p>Total Resources: {resourceCount}</p>
            <p>Last Updated: {lastUpdated}</p>
        </div>
    )

}

export default EnvironmentSummary;