import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import MenuComponent from './components/MenuComponent';
import HomeComponent from './components/HomeComponent';
import EmpOfiComponent from './components/EmpOfiComponent';

export default class Router extends Component {

    render() {

        function EmpOfiElement() {
            let { oficio } = useParams();
            return (<EmpOfiComponent oficio={oficio} />)
        }

        return (
            <div>
                <BrowserRouter>
                    <MenuComponent />
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path='/empleadosoficio/:oficio' element={<EmpOfiElement />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
