import { Component } from "react"
import "./employeeListItem.css"

class EmployeesListItem extends Component {
    onSalaryEdit = (e) => {
        const newSalary = e.target.value
        this.props.onSalaryEdit(newSalary)
    }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, promotion} = this.props
        let classNames = "list-group-item d-flex justify-content-between"

        if (increase) {
            classNames += " increase"
        }
        if (promotion) {
            classNames += " like"
        }
    
        return (
            <li className={classNames}>
                <span onClick={onToggleProp}
                    className="list-group-item-label"
                    data-toggle="promotion" >{name}</span>
    
                <input type="text"
                    className="list-group-item-input"
                    onChange={this.onSalaryEdit}
                    defaultValue={salary + "$"}/>
    
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
    
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    
}

export default EmployeesListItem