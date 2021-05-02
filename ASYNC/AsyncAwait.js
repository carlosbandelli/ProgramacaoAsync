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

/* essa forma de ver usuarios em promesi
pegarUsuarios().then((usuarios) => { //para aparecer no console.log, precisa fazer o then e colocar  o nome do parametro para ser mostrado no console log
    console.log(usuarios)
})*/

async function principal(){
    var usuarios = await pegarUsuarios() // para poder usar await dentro de uma função, antes da função tenho que colocar async igual exemplo
    console.log(usuarios) //toda a função pegarId abaixo se resume nesse codiga aqui, o diferencial que ele vira bloqueante, ou seja ele vai espara ate pegar todo o usuario e ai printar na tela
}

principal()

/* esse é a forma simplificada com await*/
//var usuarios = await pegarUsuarios()//Ei! javascript esperar essa promise ser concluida, pega essa promisse e coloca dentro dessa vairavel







/*
pegarId().then((id) => {  
buscarEmailnoBanco(id).then((email) => {

    enviarEmail("olá,como vai?",email).then(() =>{
        console.log("email enviado, para o usuario com id: " + id)
    }).catch(err =>{
        console.log(err)
    })
})
})
*/