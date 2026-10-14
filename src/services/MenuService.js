import axios from "axios";
import Global from "../Global";

export default class MenuService {

    buscarOficios() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/empleados/oficios";

            axios.get(url + request).then((response) => {
                console.log("Buscando oficios...");
                resolve(response);
            })
        })
    }

    buscarEmpleadosOficio(oficio) {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio;

            axios.get(url + request).then((response) => {
                console.log("Buscando empleados del oficio...");
                resolve(response.data);
            })
        })
    }
}