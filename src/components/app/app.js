import "./app.css"
import AppInfo from "../appInfo/appInfo"
import SearchPanel from "../searchPanel/searchPanel"
import AppFilter from "../appFilter/appFilter"
import EmployeesList from "../employeesList/employeesList"
import EmployeesAddForm from "../employeesAddForm/employeesAddForm"

function App() {
    const data = [
        {name: "John Doe", salary: 800, increase: true, id: 1},
        {name: "Steve Smith", salary: 3000, increase: false, id: 2},
        {name: "Carlos Magnusen", salary: 5000, increase: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>

                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    )
}

export default App