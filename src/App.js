import React from "react"
import Produto from "./Produtos"

const App = ()=>{
    
    const [produto, setProduto] = React.useState(null)
    
    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem("Produto");
        if (produtoLocal != null) setProduto(produtoLocal)
    },[]);
    
    React.useEffect(()=>{
        if(produto !== null){
            window.localStorage.setItem("Produto", produto)
        }  
    }, [produto])


    async function request({ target }) {
        setProduto(target.innerText)
    }
    function addLocalStorage(){
        const name = produto && produto.nome
    }
    return (
        <div>
            <h1>Produtos: {produto}</h1>
            <button onClick={request}>notebook</button>
            <button onClick={request}>smartphone</button>
            {produto && <h1>{produto.nome}</h1>}
            {produto && <p>{produto.preco}</p>}
            <Produto produto={produto}></Produto>
        </div>
    )
}
export default App