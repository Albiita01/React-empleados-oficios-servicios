import React, { Component } from 'react'
import HomeService from '../services/HomeService'

export default class HomeComponent extends Component {

    service = new HomeService();

    state = {
        empleados: []
    }

    cargarEmpleados = () => {
        this.service.buscarEmpleados().then(result => {
            console.log("Cargando empleados...");
            this.setState({
                empleados: result.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Empleados</h2>
                <table className='table'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((emp, index) => {
                                return (<tr key={index}>
                                    <td>{emp.apellido}</td>
                                    <td>{emp.oficio}</td>
                                    <td>{emp.salario}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
