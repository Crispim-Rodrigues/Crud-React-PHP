import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";


function Table1(){
    const [id, idSet] = useState('')
    const [cliente, setCliente] = useState('');
    const [prefixo, setPrefixo] = useState('');
    const [placa, setPlaca] = useState('');
    const [tipo, setTipo] = useState('');
    const [status, setStatus] = useState('');
    const [categoria, setCategoria] = useState('');
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

    
    function editar(e, id, cliente, prefixo, placa, tipo, status, categoria) {
        e.preventDefault();
        idSet(id);
        setCliente(cliente);
        setPrefixo(prefixo);
        setPlaca(placa);
        setTipo(tipo);
        setStatus(status);
        setCategoria(categoria);
        let btn = document.querySelector('#editar_cliente');
        btn.style.display = 'flex';
    };
    function close_btn(){
        let btn = document.querySelector('#editar_cliente');
        btn.style.display = 'none';
    }
    function enviar(){
        const url = "http://localhost/crud/src/api/editar_cliente.php";
        let fData = new FormData();
        fData.append('id', id);
        fData.append('cliente', cliente);
        fData.append('prefixo', prefixo);
        fData.append('placa', placa);
        fData.append('tipo', tipo);
        fData.append('status', status);
        fData.append('categoria', categoria);
        
        axios.post(url, fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));

        setCliente('');
        setPrefixo('');
        setPlaca('');
        setTipo('');
        setStatus('');
        setCategoria('');
    }
    const excluir = (e, id) => {
        const url = "http://localhost/crud/src/api/excluir_cliente.php";
        let fData = new FormData();
        fData.append('id', id);
        axios.post(url, fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));
        window.location.reload();
    };

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
                                <a href="/#" onClick={e=>excluir(e, data.id)}>Excluir</a>
                                <a href="/#" onClick={e=>editar(e, data.id, data.cliente, data.prefixo, data.placa, data.tipo, data.status, data.categoria)}>Editar</a>
                            </td>
                        </tr>
                        )})
                    }   
                </tbody>   
            </table>
            <div id="editar_cliente" className="editar_main">
            <h1 onClick={()=>close_btn()} className="close_btn">X</h1>
                <div className="editar_container">
                    <h2>Editar cliente</h2> 
                    <form onSubmit={event=>enviar(event)}>
                        <label htmlFor="cliente">Cliente</label>
                        <br />
                        <input 
                            required="required" 
                            id='cliente' 
                            type="text" 
                            name="cliente" 
                            maxLength={15} 
                            pattern="[A-Za-z]{4,20}"
                            value={cliente}
                            onChange={(event) => setCliente(event.target.value)}
                        ></input>
                        <br />
                        <label  htmlFor="prefixo">Prefixo</label>
                        <br />
                        <input 
                            required="required" 
                            id='prefixo' 
                            type="text" 
                            name="prefixo" 
                            maxLength={4} 
                            pattern="[A-Z]{4}"
                            title="TEM QUE TER 4 LETRAS MAIÚSCULAS"
                            value={prefixo}
                            onChange={(event) => setPrefixo(event.target.value)}
                        ></input>
                        <br />
                        <label  htmlFor="placa">Placa</label>
                        <br />
                        <input 
                            required="required" 
                            id='placa' 
                            type="text" 
                            name="placa" 
                            maxLength={7} 
                            pattern="[0-9]{7}"
                            title="TEM QUE TER 7 NUMEROS"
                            value={placa}
                            onChange={(event) => setPlaca(event.target.value)}
                        ></input>
                        <br />
                        <label>
                            <span className="span_edt">Tipo: </span>
                            <select 
                                required="required" 
                                id="tipo"
                                name='tipo'
                                value={tipo}
                                onChange={(event) => setTipo(event.target.value)}
                            >
                                <option disabled>selecionar</option>
                                <option>20</option>
                                <option>40</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            <span className="span_edt2">Status: </span>
                            <select 
                                required="required" 
                                id="status"
                                name='status'
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option disabled>selecionar</option>
                                <option>Cheio</option>
                                <option>Vazio</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            <span className="span_edt3">Categotia: </span>
                            <select 
                                required="required" 
                                id="categoria"
                                name='categoria'
                                value={categoria}
                                onChange={(event) => setCategoria(event.target.value)}
                            >
                                <option disabled>selecionar</option>
                                <option>Exportação</option>
                                <option>Inportação</option>
                            </select>
                        </label>
                        <input type="submit" value="SALVAR"></input>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}

export default Table1