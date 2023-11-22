// Linkedin: https://www.linkedin.com/in/artur-rochel-950361184/
// Instagram: https://www.instagram.com/artur.rochel/
// Youtube: https://www.youtube.com/channel/UCCQEBF1dX1027_TxiIoYZwA

turnOn()
roasting("Pão integral", "mal passado", false)

function turnOn(){
    console.log("Ligando torradeira")
    console.log("Esquentando chapa...")
    for(let i = 0; i<=3; i++){
        console.log("...")
        if(i===3){
            console.log("A chapa está quente! Tome cuidado!")
            console.log("Qual o tipo de pão ?")
        }
    }
}

function roasting(type , burn, salt){
    //essa função precisa estar definida para quatro tipos de pão, três tipos de torragem e true or false para sal
    if((type === "Pão Frânces") || (type === "pão frânces") || (type === "Pão frânces")){
        console.log(`O quão tostado você deseja o seu ${type} ?`)
        if((burn === "Mal passado") || (burn === "mal passado") || (burn === "Mal Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão frânces, mal passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão frânces, mal passado e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "No ponto") || (burn === "no ponto") || (burn === "No Ponto")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão frânces, no ponto e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        setup = "o pão frânces, no ponto e sem sal está pronto"
                    }
                }
            }
        }
        else if((burn === "Bem passado") || (burn === "bem passado") || (burn === "Bem Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão frânces, bem passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão frânces, bem passado e sem sal está pronto!")
                    }
                }
            }
        }
    }
    else if((type === "Pão Carteira") || (type === "pão carteira") || (type === "Pão carteira")){
        console.log(`O qual tostado você deseja o seu ${type} ?`)
        if((burn === "Mal passado") || (burn === "mal passado") || (burn === "Mal Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, mal passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, mal passado e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "No ponto") || (burn === "no ponto") || (burn === "No Ponto")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, no ponto e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, no ponto e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "Bem passado") || (burn === "bem passado") || (burn === "Bem Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, bem passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão carteira, bem passado e sem sal está pronto!")
                    }
                }
            }
        }
    }
    else if((type === "Pão Seda") || (type === "pão seda") || (type === "Pão seda")){
        console.log(`O qual tostado você deseja o seu ${type} ?`)
        if((burn === "Mal passado") || (burn === "mal passado") || (burn === "Mal Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, mal passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, mal passado e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "No ponto") || (burn === "no ponto") || (burn === "No Ponto")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, no ponto e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, no ponto e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "Bem passado") || (burn === "bem passado") || (burn === "Bem Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, bem passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("O seu pão seda, bem passado e sem sal está pronto!")
                    }
                }
            }
        }
    }
    else if((type === "Pão Integral") || (type === "pão integral") || (type === "Pão integral")){
        console.log(`O quão tostado você deseja o seu ${type} ?`)
            if((burn === "Mal passado") || (burn === "mal passado") || (burn === "Mal Passado")){
                console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
                if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, mal passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, mal passado e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "No ponto") || (burn === "no ponto") || (burn === "No Ponto")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, no ponto e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, no ponto e sem sal está pronto!")
                    }
                }
            }
        }
        else if((burn === "Bem passado") || (burn === "bem passado") || (burn === "Bem Passado")){
            console.log(`Deseja adiconar sal ao seu ${type} e ${burn} ?`)
            if(salt){
                console.log(`O seu ${type}, ${burn} e com sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, bem passado e com sal está pronto!")
                    }
                }
            }
            else{
                console.log(`O seu ${type}, ${burn} e sem sal está sendo preparado. Aguarde...`)
                for(let p = 1; p <= 3; p++){
                    console.log("...")
                    if(p === 3){
                        console.log("o pão integral, bem passado e sem sal está pronto!")
                    }
                }
            }
        }
    }
}