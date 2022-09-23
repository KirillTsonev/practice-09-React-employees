import "./appFilter.css"
import { Component } from "react"

class AppFilter extends Component {
    render() {
        const buttonsData = [
            {name: "all", label: "All employees"},
            {name: "promotion", label: "Employees up for promotion"},
            {name: "gt1000", label: "Salary more than 1000$"},
        ]

        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name
            const clazz = active ? "btn-light" : "btn-outline-light"

            return (
                <button
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}
                    type="button">
                        {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter