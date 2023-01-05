import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";


function Table1(){
    const [dataC, setDataC] = useState([]);
    useEffect(() => {
      axios.get('http://localhost/crud/src/api/retorna_cliente.php')
      .then(response=>{
        setDataC(response.data);
      })
      .catch(error=>{
        alert(error);
      });
    }, []);
    
    const editar = (e,id) => {
        
        console.log(id);
        // window.location.reload();
    }
    const excluir = (e, id) => {
        
        console.log(id);
        // window.location.reload();
    }
    

    return(
        <section className="Tabela_cliente">
        <h1>Tabela de Containers</h1>
            <table>
                <thead>
                    <tr className="Tabela_cliente_titulo">
                        <th>Id</th>
                        <th>Cliente</th>
                        <th>Prefixo</th>
                        <th>Placa</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Categoria</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody className="Tabela_cliente_informação">
                    {
                        dataC.map((data)=>{return(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.cliente}</td>
                            <td>{data.prefixo}</td>
                            <td>{data.placa}</td>
                            <td>{data.tipo}</td>
                            <td>{data.status}</td>
                            <td>{data.categoria}</td>
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

export default Table1