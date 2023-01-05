import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";


function Table3(){
    const [dataM, setDataM] = useState([]);
    useEffect(() => {
      axios.get('http://localhost/crud/src/api/retorna_movimentacao.php')
      .then(response=>{
        setDataM(response.data);
      })
      .catch(error=>{
        alert(error);
      });
    }, []);  

    return(
        <section className="Tabela_cliente">
        <h1>Formulario</h1>
            <table>
                <thead>
                    <tr className="Tabela_cliente_titulo">
                        <th>Id</th>
                        <th>Cliente</th>
                        <th>Movimentação</th>
                    </tr>
                </thead>
                <tbody className="Tabela_cliente_informação">
                    {
                        dataM.map((data)=>{return(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.cliente}</td>
                            <td>{data.movimentacao}</td>
                        </tr>
                        )})
                    }
                    <tr>
                        <th>Total</th>
                        <th>{dataM.length}</th>
                    </tr>   
                </tbody>   
            </table>
        </section>
    )
}

export default Table3