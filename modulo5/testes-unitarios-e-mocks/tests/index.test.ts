import { validateCharacter } from "../src"
import { Character } from "../src/interfaces"

describe("Validação de Personagem", ()=>{
    test("Teste de personagem, nome vazio", ()=>{
        const ryu: Character = {
            name: "",
            life: 1500,
            strength: 300,
            defense: 500
        }

        const result = validateCharacter(ryu)

        expect(result).toBe(false)
    })

    test("Teste de personagem, vida igual a zero", ()=>{
        const ryu: Character = {
            name: "Ryu",
            life: 0,
            strength: 300,
            defense: 500
        }

        const result = validateCharacter(ryu)

        expect(result).toBe(false)
    })

    test("Teste de personagem, força igual a zero", ()=>{
        const ryu: Character = {
            name: "Ryu",
            life: 1500,
            strength: 0,
            defense: 500
        }

        const result = validateCharacter(ryu)

        expect(result).toBe(false)
    })

    test("Teste de personagem, valores negaticos", ()=>{
        const ryu: Character = {
            name: "Ryu",
            life: 1500,
            strength: -100,
            defense: 500
        }

        const result = validateCharacter(ryu)

        expect(result).toBe(false)
    })

    test("Teste de personagem, valores válidos", ()=>{
        const ryu: Character = {
            name: "Ryu",
            life: 1500,
            strength: 300,
            defense: 500
        }

        const result = validateCharacter(ryu)

        expect(result).toBe(true)
    })
})