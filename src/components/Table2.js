import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";


function Table2(){
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
    
    const editar = (e,id) => {
        e.preventDefault();
        console.log(id);
        // window.location.reload();
    }
    const excluir = (e, id) => {
        e.preventDefault();
        console.log(id);
        // window.location.reload();
    }
    

    return(
        <section className="Tabela_cliente">
        <h1>Tabela de Movimentação</h1>
            <table>
                <thead>
                    <tr className="Tabela_cliente_titulo">
                        <th>Id</th>
                        <th>Cliente</th>
                        <th>Movimentação</th>
                        <th>Data Inicio</th>
                        <th>Data Fim</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody className="Tabela_cliente_informação">
                    {
                        dataM.map((data)=>{return(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.cliente}</td>
                            <td>{data.movimentacao}</td>
                            <td>{data['data inicio']}</td>
                            <td>{data['data final']}</td>
                            <td>
                                <a href="/#" onClick={e=>excluir(e,data.id)}>Excluir</a>
                                <a href="/#" onClick={e=>editar(e,data.id)}>Editar</a>
                            </td>
                        </tr>
                        )})
                    }   
                </tbody>   
            </table>
        </section>
    )
}

export default Table2