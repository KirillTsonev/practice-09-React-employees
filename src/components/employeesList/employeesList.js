import EmployeesListItem from "../employeesListItem/employeesListItem"
import "./employeesList.css"

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryEdit}) => {
    const elements = data.map(a => {
        const {id, ...itemProps} = a
        return (
            <EmployeesListItem
            key={id}
            {...itemProps}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            onDelete={() => onDelete(id)}
            onSalaryEdit={onSalaryEdit} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList