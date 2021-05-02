function enviarEmail(corpo, para, callback) {
    setTimeout(() =>{     

            // logica de email
            var deuErro = false;

            if(deuErro){
                callback(12,"O envio do e-mail falhou!")
            }else{
                callback(12)
            }   
        
    },2000)
    
}

console.log("Inicio do envio de e-mail!")

enviarEmail("Oi, seja bem vindo ao Guia","victor@udemy", (time,erro) =>{
    if(erro == undefined){
        console.log("Tudo,ok")
        console.log(`tempo:${time}s`)
    }else{
        console.log("Ocorreu um erro:" + erro)
    }      
})