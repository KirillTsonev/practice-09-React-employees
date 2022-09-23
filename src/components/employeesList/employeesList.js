import EmployeesListItem from "../employeesListItem/employeesListItem"
import "./employeesList.css"

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(a => {
        const {id, ...itemProps} = a
        return (
            <EmployeesListItem
            key={id}
            {...itemProps}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList