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

function pegarUsuarios(){ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                {name: 'Victor', lang:'JS'},
                {name: 'Lima', lang:'C#'},
                {name: 'Daniel', lang:'Java'}
            ])
        },3000)
    })
}



async function principal(){
   var id =  await pegarId() //javascrfipt vai esperar ela ser concluida e quando for concluida ele vai colocarf dentro da variavel id
   var email = await buscarEmailnoBanco(id)//ela recebe um id e com base nesse id ele pega o email
   enviarEmail("Olá, como vai?",email).then(()=>{//nessa parte passa o corpo do email e parar quem vai o email then == resolve
       console.log("Email enviado!")
   }).catch((err) => {//catch == reject
       console.log(err)
   })
}

principal()



/*
    esse codigo foi convertido para Async e Await exemplo acima
pegarId().then((id) => {  // Eu pego um Id 
buscarEmailnoBanco(id).then((email) => {//apos pegar esse id ele verifica um email correspondente a ele

    enviarEmail("olá,como vai?",email).then(() =>{ ápos pegar esse id eu vou enviar esse email para alguem
        console.log("email enviado, para o usuario com id: " + id)
    }).catch(err =>{
        console.log(err)
    })
})
})
*/