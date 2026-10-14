import axios from "axios";
import Global from "../Global";

export default class HomeService {

    buscarEmpleados() {
        return new Promise(function (resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/empleados";

            axios.get(url + request).then((response) => {
                console.log("Buscando empleados...");
                resolve(response);
            })
        })
    }
}