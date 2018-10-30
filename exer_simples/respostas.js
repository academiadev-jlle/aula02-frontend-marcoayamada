function ordena(...nums){
    //return nums.sort((a, b) => a - b)[0];

    aux=nums[0];

    nums.forEach(function(item){
        item<aux ? aux=item: null;
    })

    return aux;
}

console.log(ordena(3,5,2,5,67,9));


/*-------------*/

let str='javascript ';

let repeatstr = (qtd, str) => {

    return str.repeat(qtd).toUpperCase()
}

console.log(repeatstr(10, str))

/*-------------*/

class Carro {
    constructor(cor, modelo, fabricante){
        this.cor = cor;
        this.modelo = modelo;
        this.fabricante = fabricante
    }
}
goleta = new Carro('Branco gelo', 'Gol', 'Volks')
goleta2 = new Carro('Branco gelo', 'Gol', 'Volks')
monzao = new Carro('Vermelho Fitipaldi', 'Monza', 'Chevrolet')

let compara = (inst1, inst2) => {
    keys1 = Object.keys(inst1);
    keys2 = Object.keys(inst2);

    if(keys1.toString()!==keys2.toString())
        console.log("Keys diferentes!");
    else{
        keys1.forEach(element => {
            //console.log(inst1[element], inst2[element])
    
            if(inst1[element]!==inst2[element])
                console.log(`Key:[${element}] Values:[${inst1[element]}] [${inst2[element]}]`);
        });
    }
}

console.log(compara(goleta, monzao))
console.log(compara(goleta, goleta2))
/*como remove o undefined da ultima posição? */

/*--------------------- */
