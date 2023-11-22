let bread = ["Pão Carteira", "Bem passado", "Sem sal"]

turnOn()
making()

function turnOn(){
    console.log("Ligando torradeira")
    console.log("Esquentando chapa...")
    for(let i = 0; i<=5; i++){
        console.log("...")
        if(i===5){
            console.log("A chapa está quente! Tome cuidado!")
            console.log("Qual o tipo de pão ?")
        }
    }
}

function making(){
    if(bread[0] === "Pão Frânces"){
        console.log("O quão torrado você deseja o seu " + bread[0] + " ?")
        if(bread[1] === "Mal passado"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
        if(bread[1] === "No ponto"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
        if(bread[1] === "Bem passado"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
    }
    //Pão carteira
    if(bread[0] === "Pão Carteira"){
        console.log("O quão torrado você deseja o seu " + bread[0] + " ?")
        if(bread[1] === "Mal passado"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
        if(bread[1] === "No ponto"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
        if(bread[1] === "Bem passado"){
            console.log("Você deseja adicionar sal ao " + bread[0] + " e " + bread[1] + " ?")
            if(bread[2] === "Sem sal"){
                for(let p = 1; p<=3; p++){
                    console.log("preparando...")
                    if(p===3){
                        console.log("O " + bread[0] + ", " + bread[1] + " e " + bread[2] + " está pronto!")
                    }
                }
            }
        }
    }
}