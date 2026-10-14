import React, { Component } from 'react'
import MenuService from '../services/MenuService'
import { NavLink } from 'react-router-dom';

export default class MenuComponent extends Component {

    service = new MenuService();

    state = {
        oficios: []
    }

    cargarOficios = () => {
        this.service.buscarOficios().then(result => {
            this.setState({
                oficios: result.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarOficios();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page"
                                        to="/">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Oficios
                                    </a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.oficios.length > 0 ? (
                                                this.state.oficios.map((ofi, index) => {
                                                    return (<li key={index} className='dropdown-item'>
                                                        <NavLink to={"/empleadosoficio/" + ofi} className="dropdown-item">{ofi}
                                                        </NavLink>
                                                    </li>)
                                                })
                                            ) : (
                                                <li className='dropdown-item'>No se encontraron oficios</li>)
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
