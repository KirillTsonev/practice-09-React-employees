import EmployeesListItem from "../employeesListItem/employeesListItem"
import "./employeesList.css"

const EmployeesList = ({data, onDelete}) => {
    const elements = data.map(a => {
        const {id, ...itemProps} = a
        return (
            <EmployeesListItem
            key={id}
            {...itemProps}
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