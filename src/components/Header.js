import '../App.css';
import axios from 'axios';
import { useState } from 'react';

function Header() {
    const [cliente, setCliente] = useState('');
    const [prefixo, setPrefixo] = useState('');
    const [placa, setPlaca] = useState('');
    const [tipo, setTipo] = useState('20');
    const [status, setStatus] = useState('Cheio');
    const [categoria, setCategoria] = useState('Exportação');
    
    function enviar(){    
        const url = "http://localhost/crud/src/api/novo_cliente.php";
        let fData = new FormData();
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
        setTipo('20');
        setStatus('Cheio');
        setCategoria('Exportação');
    };




    const abrirmenu = ()=>{
        var menu = document.querySelector('.addcliente')
        menu.classList.toggle("close")
    }

    return(
        <header>
            {/* logo */}
            <div className="logo"><h1>Gerenciamento de Containers</h1></div>

            {/* icon */}
            <label className='icon' htmlFor="check">
                <input type="checkbox" onChange={abrirmenu} id="check"/> 
                <span></span>
                <span></span>
                <span></span>
            </label>

            {/* form add cliente */}

            <div className="addcliente close">
                <div className="form_container">
                    <div className='text_form'><h3>Adicione um novo cliente</h3></div>
                    <div className="form">
                        <form id='formulario' onSubmit={event=>enviar(event)}>
                            <label htmlFor="cliente">Cliente</label>
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
                            <label  htmlFor="placa">Placa</label>
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
                            <label className='label'>
                                <span>Tipo: </span>
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
                            <label className='label'>
                                <span>Status: </span>
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
                            <label className='label'>
                                <span>Categotia: </span> 
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
            </div>


        </header>
    )
};

export default Header;
