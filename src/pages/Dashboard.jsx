import MetricCard from "../components/MetricCard.jsx";
import {useEffect,useState} from "react";
import SearchBar from "../components/SearchBar.jsx";
// import { fetchDashboardData } from "../data/dashboardData.js";
import { getDashboardMetrics } from "../services/dashboardApi.js";
import RefreshButton from "../components/RefreshButton.jsx";
import Sidebar from "../components/Sidebar.jsx";
import LoadingCard from "../components/LoadingCard.jsx";
import ErrorCard from "../components/ErrorCard.jsx";
import EnvironmentSummary from "../components/EnvironmentSummary.jsx";


function Dashboard(){

    // const [runningEC2, setRunningEC2] = useState(8);
    // const [stoppedEC2, setStoppedEC2] = useState(8);

    const[loading, setLoading] = useState(true);

    const[searchText, setSearchText] = useState("");

    const [metrics,setMetrics] = useState([]);

    const [error, setError] = useState(null);

    const[lastUpdated, setLastUpdated] = useState(new Date());

    const[isRefreshing, setIsRefreshing] = useState(false);

    const [timer, setTimer] = useState(0);

    const [accountNumber,setAccountNumber] = useState("1234567890");

    const environment = "Local";

    const refreshSeconds = 30000;

    async function loadDashboard(){

        if(isRefreshing) return;
        setIsRefreshing(true);

        try {
            const data = await getDashboardMetrics();
            if(data.data.length === 0){
                return(
                    setError(<div>
                        <h2>No AWS Resources Found</h2>
                        <p>Please refresh dashboard.</p>
                        {/*<RefreshButton*/}
                        {/*    onRefresh={loadDashboard}*/}
                        {/*    loading={loading}*/}
                        {/*    isRefreshing={isRefreshing}/>*/}
                    </div>)
                )
            }else {
                setMetrics(data.data);
                setError(null);
                setLastUpdated(new Date());
                setAccountNumber(data.accountNumber);
            }
        }catch (error) {
            console.error(error);
            setError(<ErrorCard/>);
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    }

    useEffect(() =>
    {
        loadDashboard();
    },[]);

    useEffect(() => {

        const interval = setInterval(() => {
            console.log("Refreshing Dashboard...");
            loadDashboard();
        },refreshSeconds);

        return () => {
            clearInterval(interval);
        }

    },[]);


    useEffect(() => {

        const interval = setInterval(() =>{
            setTimer(value => value + 1);
        },1000);

        return () => clearInterval(interval);

    },[]);

    if(loading){
        return(
            <div style={{
                display:"flex",
                // flexWrap:"wrap",
                gap:"20px",
                justifyContent:"center"
            }}>
                <LoadingCard/>
            </div>
        )
    }

    function getLastUpdatedText(){

        const seconds = Math.floor((new Date() - lastUpdated) / 1000);

        if(seconds < 5){
            return "Just Now";
        }
        if(seconds < 60){
            return `${seconds} seconds ago`;
        }
        const minutes = Math.floor(seconds / 60);

        return `${minutes} minutes ago`;

    }

    if(error){
        return(
            <ErrorCard onRetry={loadDashboard}/>
        )
    }

    function launchEC2() {
        const updatedMetrics = metrics.map(metric => {
            if(metric.title === "Running EC2"){
                return{
                   ...metric,
                   value: metric.value + 1
                }
            }
            if(metric.title === "Stopped EC2"){
                return{
                    ...metric,
                    value: Math.max(0,metric.value - 1)
                }
            }
            return metric;
        });
        setMetrics(updatedMetrics);
    }

    function stopEC2() {
        const updatedMetrics = metrics.map(metric => {
            if(metric.title === "Running EC2"){
                return{
                    ...metric,
                    value: Math.max(0,metric.value - 1)
                }
            }
            if(metric.title === "Stopped EC2"){
                return{
                    ...metric,
                    value: metric.value + 1
                }
            }
            return metric;
        });
        setMetrics(updatedMetrics);
    }



    const filteredMetric = metrics
        .filter(metric =>
            metric.title
                .toLowerCase()
                .includes(searchText.toLowerCase())
        )


    return(
        <div style = {{
            display: "flex",
            alignItems:"flex-start",
            width: "100%"
        }}>
            <Sidebar />
            <div style = {{
                flex: 1,
                padding: "20px"
            }}>
        <div>
            <div style={{
                borderBottom: "1px solid gray",
                marginBottom: "20px",
                paddingBottom: "20px"
            }}>
            <EnvironmentSummary environment={environment}
                                region="ap-south-1"
                                account={accountNumber}
                                resourceCount={metrics.length}
                                lastUpdated={getLastUpdatedText()}
                                />
            </div>
            <div style = {{ marginBottom: "20px"}}>
            <RefreshButton
                onRefresh={loadDashboard}
                loading={loading}
                isRefreshing={isRefreshing}
                />
            </div>
            <h4>Last Updated: {getLastUpdatedText()}</h4>
            <button style={{color:"white",padding: "10px 18px", background: "#2563eb", border:"none",margin:"1px"}} onClick={launchEC2}>Launch EC2</button>
            <button style={{color:"red",padding: "10px 18px", background: "#2563eb", border:"none",margin:"1px"}} onClick={stopEC2}>Stop EC2</button>
            <div>
                <SearchBar searchText={searchText}
                           setSearchText={setSearchText}
                />
                <p>Showing {filteredMetric.length} resources</p>
                <h3>Environment Summary</h3>
                <p>
                    Monitoring AWS Infrastructure
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    maxWidth: "1400px",
                    margin: "auto",
                    boxShadow:"0 2px 10px rgba(0,0,0,0.2)",
                    transition:"0.3s"
                }}
            >

            {filteredMetric
                .map(metric =>(
                <MetricCard
                    key = {metric.id}  // this is important, later backend removes any carf but react needs to know hich card disappered, it needs to compare everything but using key, react immediately knows
                    icon = {metric.icon}
                    title = {metric.title}
                    value = {metric.value}
                    unit = {metric.unit}
                />
            ))}
            </div>
        </div>
        </div>
        </div>
    );
}



export default Dashboard;