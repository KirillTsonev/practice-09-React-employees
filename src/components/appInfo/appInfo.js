import "./appInfo.css"

const AppInfo = (props) => {
    const {increaseTotal, total} = props

    return (
        <div className="app-info">
            <h1>Employee DB in N company</h1>
            <h2>Total number of employees: {total}</h2>
            <h2>To reviece bonus: {increaseTotal}</h2>
        </div>
    )
}

export default AppInfo