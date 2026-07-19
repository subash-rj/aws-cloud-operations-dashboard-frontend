export async function getDashboardMetrics(){

    const response = await fetch("http://localhost:8080/api/dashboard");

    console.log("response {}",response);

    if(!response.ok){
        throw new Error("Unable to fetch dashboard");
    }

    return await response.json();

}