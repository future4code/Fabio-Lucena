import { Character } from "./interfaces";

export const validateCharacter = (character: Character) =>{
    if (!character.name || character.life === undefined || character.strength === undefined || character.defense === undefined) {
        return false
      }

    if(character.life <= 0 || character.strength <= 0 || character.defense <= 0){
        return false
    }  

    return true
}

// export const performAttack = (attacker: Character, defender: Character) =>{ 

//     if(!validateCharacter(attacker) || !validateCharacter(defender)){
//         throw new Error("Invalid Character")
//     }
                                                      // ------------------>>>>>> exercicio 3, letra a
//     if(attacker.strength > defender.defense){
//         defender.life -= attacker.strength - defender.defense 
//     }
    

// }

export const performAttack = (
    attacker: Character, 
    defender: Character,
    validator: (input: Character) => boolean ) =>{ 
     

    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character")            // A diferença entre as duas funções é que na segunda a função de validação será passada como um 
    }                                                   // parâmetro, sendo assim a função de validação está injetada dentro da função performAttack                

    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense 
    }
    

}

