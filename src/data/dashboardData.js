export function fetchDashboardData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    icon: "🖥",
                    title: "Running EC2",
                    value: 8,
                    unit: ""
                },
                {
                    id: 2,
                    icon: "⛔",
                    title: "Stopped EC2",
                    value: 2,
                    unit: ""
                },
                {
                    id: 3,
                    icon: "🗄",
                    title: "RDS Instances",
                    value: 3,
                    unit: ""
                },
                {
                    id: 4,
                    icon: "❤️",
                    title: "Health Status",
                    value: "Healthy",
                    unit: ""
                },
                {
                    id: 5,
                    icon: "⚡",
                    title: "CPU Usage",
                    value: "43",
                    unit: "%"
                }
            ]);
        },2000);
    });
}