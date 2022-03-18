import { performAttack, validateCharacter } from "../src"
import { Character } from "../src/interfaces"

// describe("Validação de Personagem", ()=>{
//     test("Teste de personagem, nome vazio", ()=>{
//         const ryu: Character = {
//             name: "",
//             life: 1500,
//             strength: 300,
//             defense: 500
//         }

//         const result = validateCharacter(ryu)

//         expect(result).toBe(false)
//     })

//     test("Teste de personagem, vida igual a zero", ()=>{
//         const ryu: Character = {
//             name: "Ryu",
//             life: 0,
//             strength: 300,
//             defense: 500
//         }

//         const result = validateCharacter(ryu)

//         expect(result).toBe(false)
//     })

//     test("Teste de personagem, força igual a zero", ()=>{
//         const ryu: Character = {
//             name: "Ryu",
//             life: 1500,
//             strength: 0,
//             defense: 500
//         }

//         const result = validateCharacter(ryu)

//         expect(result).toBe(false)
//     })

//     test("Teste de personagem, valores negaticos", ()=>{
//         const ryu: Character = {
//             name: "Ryu",
//             life: 1500,
//             strength: -100,
//             defense: 500
//         }

//         const result = validateCharacter(ryu)

//         expect(result).toBe(false)
//     })

//     test("Teste de personagem, valores válidos", ()=>{
//         const ryu: Character = {
//             name: "Ryu",
//             life: 1500,
//             strength: 300,
//             defense: 500
//         }

//         const result = validateCharacter(ryu)

//         expect(result).toBe(true)
//     })
// })

describe("Validação com Mocks", () => {
    test("Teste para saída de sucesso", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any)
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    })

    test("Teste para erros de input", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };


        try {
            performAttack(attacker, defender, validatorMock as any)
        } catch (error) {
            expect(error.message).toBe("Invalid Character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
            console.log(error.message)
        }
    })
    test("Teste para erros de input2", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: -400,
            strength: 800,
        };


        try {
            performAttack(attacker, defender, validatorMock as any)
        } catch (error) {
            expect(error.message).toBe("Invalid Character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
            console.log(error.message)
        }
    })
})