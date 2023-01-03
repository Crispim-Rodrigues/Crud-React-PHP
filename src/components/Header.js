import '../App.css';

function Header() {
    return(
        <header>
            <div className="logo"><h1>Gerenciamento de Containers Portuários</h1></div>
              
            <label for="check">
                <input type="checkbox" id="check"/> 
                <span></span>
                <span></span>
                <span></span>
            </label>
           
        </header>
    )
};

export default Header;
