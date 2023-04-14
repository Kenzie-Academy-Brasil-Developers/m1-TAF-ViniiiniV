// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
let gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male"){             //verificando se o genero é masculino
    if (height >= 1.70){            //verificando se a altura mínima for de 1,70 metros
        if (barReps >= 6 || barSeconds >= 15){  //verificando se ele fez mais ou 6 repetições, ou ele ficou mais de 15 segundos na barra                                                          
            if (abs >= 41){                     //verificando se ele fez os 41 ou mais abdominais pedidos
                if (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200){   //se ele correu pelo menos 3km em no máximo 12min de corrida ou pelo menos 5km em no máximo 20min de corrida
                    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){   //se ele nadou por pelo menos 100m em no máximo 1min de natação ou no máximo 30seg de mergulho
                        passed = true;  //caso for cumprido todos os requisitos do if ele passa no teste
                    }
                }
            }
        }
    }
}else if (gender === "female"){     //caso não seja do sexo masculino       
    if (height >= 1.60){            //verificando se a altura mínima de for 1,60 metros
        if (barReps >= 5 || barSeconds >= 12){  //verificando se ela fez mais ou 5 repetições, ou ele ficou mais de 12 segundos na barra
            if (abs >= 41){                     //verificando se ela fez os 41 ou mais abdominais pedidos
                if (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320){   //se ela correu pelo menos 4km em no máximo 15min de corrida ou pelo menos 6km em no máximo 22min de corrida
                    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){   //se ela nadou por pelo menos 100m em no máximo 1min de natação ou no máximo 30seg de mergulho
                        passed = true;  //caso for cumprido todos os requisitos do else if ela passa no teste
                    }
                }
            }
        }
    }
}else {
    passed = false};     //caso não for cumprido os requisitos, não passa no teste


/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
