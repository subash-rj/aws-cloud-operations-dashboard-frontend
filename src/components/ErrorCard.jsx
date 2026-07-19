function ErrorCard({onRetry}){
    return(
        <div>
            <h2>Unable to connect</h2>
            <ol>
                <li>Check Internet</li>
                <li>Check AWS Credentials</li>
                <li>Check IAM Permission</li>
            </ol>

            <button onClick={onRetry}>
                Retry
            </button>
        </div>
    )
}

export default ErrorCard;
