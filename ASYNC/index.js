function enviarEmail(corpo, para, callback) {
    setTimeout(() =>{
        console.log(`
        Para: ${para}
        ------------------------------------
        ${corpo}
        ------------------------------------

        De: Victor Lima       
        
        `)
        callback("OK",5,"8s","Carlos Bandelli")
    },8000)
    
}

console.log("Inicio do envio de e-mail!")
enviarEmail("Oi, seja bem vindo ao Guia","victor@udemy", (status,amount,time,name) =>{
    console.log(`
        De: ${name}
        Status: ${status}
        ------------------------------------------
        Contato: ${amount}
        ------------------------------------------
        Tempo de envio:${time}
        
        TUDO,OK!
    `)
        
})
