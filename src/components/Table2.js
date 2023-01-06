import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";


function Table2(){
    const [dataM, setDataM] = useState([]);
    const [id, setId] = useState([]);
    const [movimentacao, setMovimentacao] = useState('');
    const [datainicio, setDatainicio] = useState('');
    const [datafinal, setDatafinal] = useState('');

    useEffect(() => {
      axios.get('http://localhost/crud/src/api/retorna_movimentacao.php')
      .then(response=>{
        setDataM(response.data);
      })
      .catch(error=>{
        alert(error);
      });
    }, []);
    function enviar(){
        const url = "http://localhost/crud/src/api/editar_movimentacao.php";
        let fData = new FormData();
        fData.append('id', id);
        fData.append('movimentacao', movimentacao);
        fData.append('datainicio', datainicio);
        fData.append('datafim', datafinal);
    
        axios.post(url, fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));
    };
    const editar = (e, id, movimentacao, datainicio, datafinal) => {
        e.preventDefault();
        setId(id);
        setMovimentacao(movimentacao);
        setDatainicio(datainicio);
        setDatafinal(datafinal);
        let btn = document.querySelector('.editar_main1')  
        btn.style.display = 'flex';
    }
    function close_btn(){
        let btn = document.querySelector('.editar_main1');
        btn.style.display = 'none';
    }
    const excluir = (e, id) => {
        e.preventDefault();
        const url = "http://localhost/crud/src/api/excluir_cliente.php";
        let fData = new FormData();
        fData.append('id', id);
        axios.post(url, fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));
        window.location.reload();
    };
    

    return(
        <section id='btn_movimentacao' className="Tabela_cliente">
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
                                <a href="/#" onClick={e=>editar(e,data.id, data.movimentacao, data['data inicio'], data['data final'] )}>Editar</a>
                            </td>
                        </tr>
                        )})
                    }   
                </tbody>   
            </table>
            <div className="editar_main1">
            <h1 onClick={()=>close_btn()} className="close_btn">X</h1>
                <div className="editar_container">
                    <h2>Editar Movimentação</h2> 
                    <form onSubmit={event=>enviar(event)}>
                        <label htmlFor="cliente">Movimentação</label>
                        <br />
                        <select 
                        required="required" 
                        name="movimentacao" 
                        id='movimentação' 
                        value={movimentacao}
                        onChange={(event) => setMovimentacao(event.target.value)}
                        
                        >
                            <option disabled>selecionar</option>
                            <option>Embarque</option>
                            <option>Descarga</option>
                            <option>Gate in</option>
                            <option>Gate out</option>
                            <option>Resposicionamento</option>
                            <option>Pesagem</option>
                            <option>Scanner</option>
                        </select>
                        <br />
                        <label  htmlFor="prefixo">Data Inicio</label>
                        <br />
                        <input 
                            required="required" 
                            id='datainicio' 
                            type="datetime-local" 
                            name="datainicio" 
                        
                            value={datainicio}
                            onChange={(event) => setDatainicio(event.target.value)}
                        ></input>
                        <br />
                        <label  htmlFor="placa">Data final</label>
                        <br />
                        <input 
                            required="required" 
                            id='datafinal' 
                            type="datetime-local" 
                            name="datafinal"
                            value={datafinal}
                            onChange={(event) => setDatafinal(event.target.value)}
                        ></input>
                        <br />
                    
                        <input type="submit" value="SALVAR"></input>
                    </form>
                </div>
            </div>    
        </section>
    )
}

export default Table2