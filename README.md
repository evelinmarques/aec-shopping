<h1 align="center"> 
  Resultado Visual Esperado: 
  <img src="https://github.com/evelinmarques/playSound/assets/56482367/fe5d5bb1-e8e8-4def-8390-13057d7f1ddc">
  <img src="https://github.com/evelinmarques/playSound/assets/56482367/a04fa219-a8b2-43b9-b855-e58389cf36e6">

</h1>
<img src="">

<h1 align="center"> 
  Requisitos do Projeto: 
</h1>
<p align="center">
    <p>Listagem de Produtos a partir de um arquivo JSON simulando uma API • </p>
    <p>Ao clicar em um produto, exibir os detalhes do mesmo •</p>
   <p>Barra de busca para filtrar os produtos por nome ou categoria (Esta aplicação filtra por ambos) •</p>
   <p>Responsividade •</p>
   <p>Criação de Container Docker da aplicação</p>
   Possibilidade de adicionar produtos a um carrinho de compras exibindo a quantidade total de itens • (Esta aplicação também mostra o valor total dos produtos)
</p>

<h1 align="center"> 
  💻 Como rodar o projeto: 
</h1>
<p align="center">
    Primeiramente clone o projeto e após isso, instale as dependências. nesse projeto precisaremos do node, yarn e vite.
    Caso não tenha, realize a instalação:

    [node]: https://nodejs.org/en/download/ 
    [yarn]: https://classic.yarnpkg.com/en/docs/install#mac-stable  | npm install --global yarn
    [vite]: https://vitejs.dev/guide/ | npm create vite@latest
    
    
<p>
    Para configurar o Vite de acordo com o projeto, escolha as opções : 
    <p>Select a Framework > React</p>
    <p>Select a variant > TypeScript</p>
    Dessa forma: </p>
<img src="https://github.com/evelinmarques/playSound/assets/56482367/3bc6a3b9-07ec-49e8-8f2e-8dddb4ae2553">
        
<p>Em seguida execute o projeto com yarn:</p>

        yarn
        yarn run dev 

Após isso, o projeto já pode ser acessado através do http://localhost:5173/ ou através do container do Docker na porta 3000:3000
Caso deseje executar o container do Docker, se certifique de ter o Docker instalado e utilize os comandos : 

    docker build -t shopping-card-challenge .
    docker run -p 3000:3000 shopping-card-challenge
    
</p>
<h1 align="center"> 
  🛠 Tecnologias: 
</h1>
<p align="center">
   React •
   TypeScript •
   Vite •
   Docker •
   HTML •
   CSS •
</p>


<p align="center">
  Feito 
  por <a href="https://www.linkedin.com/in/evelinmarquess/">Évelin Marques</a>
</p>
