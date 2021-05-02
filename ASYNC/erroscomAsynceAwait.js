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
   var id =  await pegarId() 
   var email = await buscarEmailnoBanco(id)
   
   try{ // essa estrutura serve para verificar erros com Async e Await, Se a execusão do bloco for verdadeira,tudo otimo
        await enviarEmail("Olá, como vai?",email)
        console.log("Email enviado com sucesso!")
    }catch(erro){ // se der erro ele mostra essa outra parte
        console.log(erro)       
   }
}

principal()



