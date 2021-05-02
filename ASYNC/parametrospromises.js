function enviarEmail(corpo, para){
    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "carlos@udemy.com"}) //Só pode ser feito um parametro quando é usado promise, para burlar isso voce pode abrir um Json{}, dentro dele voce coloca os parametros que quer conforme o exemplo
            }else{
                reject("fila cheia")// pode ser passado um Json, ele serve para mostrar o erro, colocando a mensagem especifica do erro
            }
        },4000)
    })
}


enviarEmail("Olá mundo", "carlos@udemy.com").then(({time,to})=>{  // como vou receber o Json dentro do then.Dentro do the posso abrir um Json e usar o operador de desestruturação
    
    console.log(`
    Time: ${time}
    -----------------------
    To: ${to}
    `)
    
}).catch((erro)=>{ // dentro do reject voce coloca a msg, aqui no catch voce coloca a varial que vai receber essa mensagem, eno console.log voce coloca para mostrar essa variavel
    console.log("QUE PENA, NÃO DEU :(" + erro)
})