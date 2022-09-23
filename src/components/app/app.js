import "./app.css"
import AppInfo from "../appInfo/appInfo"
import SearchPanel from "../searchPanel/searchPanel"
import AppFilter from "../appFilter/appFilter"
import EmployeesList from "../employeesList/employeesList"
import EmployeesAddForm from "../employeesAddForm/employeesAddForm"
import { Component } from "react"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: "John Doe", salary: 800, increase: true, promotion: true, id: 1},
                {name: "Steve Smith", salary: 3000, increase: false, promotion: false, id: 2},
                {name: "Carlos Magnusen", salary: 5000, increase: false, promotion: false, id: 3},
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(a => a.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            promotion: false,
            id: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(a => {
                if (a.id === id) {
                    return {...a, [prop]: !a[prop]}
                }
                return a
            })
        }))
    }

    render() {
        const total = this.state.data.length
        const increaseTotal = this.state.data.filter(a => a.increase === true).length

        return (
            <div className="app">
                <AppInfo
                    increaseTotal={increaseTotal}
                    total={total}/>

                <div className="search-panel">
                    <SearchPanel/>
    
                    <AppFilter/>
                </div>
    
                <EmployeesList
                    data={this.state.data}
                    onToggleProp={this.onToggleProp}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App