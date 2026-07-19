function Sidebar(){

    return(

        <div style = {{
            width: "250px",
            borderRight: "1px solid gray",
            paddingTop: 40,
            fontSize: 22,
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "12px",
            cursor: "pointer"
        }}>
            <p>🏠 Dashboard</p>

            <p>🖥 EC2</p>

            <p>🪣 S3</p>

            <p>📊 CloudWatch</p>

            <p>⚙ Settings</p>
        </div>

    );

}

export default Sidebar;