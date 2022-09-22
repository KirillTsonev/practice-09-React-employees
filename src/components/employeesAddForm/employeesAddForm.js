import "./employeesAddForm.css"
import { Component } from "react"

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state

        return (
                <div className="app-add-form">
                    <h3>Add new employee</h3>
                    <form
                        className="add-form d-flex">
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="What's their name?" 
                            onChange={this.onValueChange}
                            value={name}
                            name="name"/>
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="Salary in $?" 
                            onChange={this.onValueChange}
                            value={salary}
                            name="salary"/>
        
                        <button type="submit"
                                className="btn btn-outline-light">Add</button>
                    </form>
                </div>
            )
    }
}

export default EmployeesAddForm