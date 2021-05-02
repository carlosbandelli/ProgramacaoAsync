function enviarEmail(corpo, para){
    return new Promise((resolve, reject) =>{ //RECEBE DOIS parametro 1- parra avisar que a promise foi comprida e 2- se não for.
        setTimeout(() => {
            var deuErro = true;
            if(!deuErro){
                resolve() // Promessa comprida
            }else{
                reject() //Promessa não comprida
            }
        },4000)
    })
}

//chama a função para fazer o teste
enviarEmail("Olá mundo", "carlos@udemy.com").then(()=>{ // then, serve para saber se a promisse foi cumprida, só serve para saber se foi feita a promessa
    var a = 1+1;
    console.log("OPA, VOCÊ CONSEGUIU FAZER O QUE ME PROMETEU")
    console.log(a)
}).catch(()=>{ // serve para saber se a promessa não foi comprida ou rejetada
    console.log("QUE PENA, NÃO DEU :(")
})