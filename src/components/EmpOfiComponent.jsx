import React, { Component } from 'react'
import MenuService from '../services/MenuService';

export default class EmpOfiComponent extends Component {

    service = new MenuService();

    state = {
        empleados: []
    }

    cargarEmpOfi = () => {
        this.service.buscarEmpleadosOficio(this.props.oficio).then(result => {
            console.log("Llega" + this.props.oficio);
            this.setState({
                empleados: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarEmpOfi();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.oficio != this.props.oficio) {
            this.cargarEmpOfi();
            this.setState({

            })
        }
    }

    render() {
        return (
            <div>
                <h1>Empleados del oficio: {this.props.oficio}</h1>
                <ul className="list-group">
                    {
                        this.state.empleados.length > 0 ? (
                            this.state.empleados.map((emp, index) => {
                                return (
                                    <li key={index} className="list-group-item">
                                        {emp.apellido} - {emp.oficio}
                                    </li>
                                );
                            })
                        ) : (
                            <li className="list-group-item">No hay empleados para este oficio</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
