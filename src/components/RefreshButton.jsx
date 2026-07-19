function RefreshButton({ onRefresh, loading, isRefreshing }){
    return(
        <button style={{color:"black"}}
            onClick={onRefresh}
            disabled={loading || isRefreshing}
            >
            {loading || isRefreshing ? "Refreshing..." : "🔁 Refresh Dashboard"}
        </button>
    );
}

export default RefreshButton;