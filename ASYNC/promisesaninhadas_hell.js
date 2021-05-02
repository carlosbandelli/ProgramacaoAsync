function pegarId(){
        return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(5)
        },1500)
    })
}

function buscarEmailnoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("victorlima@guia.com.br")
        },2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, to: "carlos@udemy.com"}) 
            }else{
                reject("fila cheia")
            }
        },4000)
    })
}

pegarId().then((id) => { // ele chamou pegarId. quando Id estava comprida 
    buscarEmailnoBanco(id).then((email) => {// ele chamou buscaremailnobanco, quando pegar e-mailno banco for comprido

        enviarEmail("olá,como vai?",email).then(() =>{// quando enviar email foi comprido ele printou essa msg na tela
            console.log("email enviado, para o usuario com id: " + id)
        }).catch(err =>{
            console.log(err)
        })
    })
})