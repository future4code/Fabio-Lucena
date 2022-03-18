import { performPurchase, verifyAge } from "../src"
import { Casino, LOCATION, NACIONALITY, User3, Result } from "../src/model/casinoInterface"
import User from "../src/model/userInterface"

describe("Testando exercícios, aula Jest", () => {

    test("Exercício 1", () => {
        const user1: User = {
            name: "Astrodev",
            balance: 100
        }
        const user2: User = {
            name: "Astrodev",
            balance: 50
        }
        const user3: User = {
            name: "Astrodev",
            balance: 30
        }

        const result = performPurchase(user1, 40)
        const result2 = performPurchase(user2, 50)
        const result3 = performPurchase(user3, 50)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
        expect(result2).toEqual({
            name: "Astrodev",
            balance: 0
        })
        expect(result3).toEqual(undefined)
    })
})

describe("Testando exercícios, aula Jest/Desafios", () => {
    const userBrazilizan1: User3 = {
        name: "José",
        age: 22,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const userAmerican1: User3 = {
        name: "John",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const userBrazilizan2: User3 = {
        name: "Leticia",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const userAmerican2: User3 = {
        name: "Johnny",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const userBrazilizan3: User3 = {
        name: "Karen",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const userAmerican3: User3 = {
        name: "Paul",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const userAmerican4: User3 = {
        name: "David",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }

    const casinao: Casino = {
        name: "casinao",
        location: LOCATION.BRAZIL
    }

    const cbgb: Casino = {
        name: "cbgb",
        location: LOCATION.EUA
    }
    const array: User3[] = [userAmerican1, userBrazilizan1, userBrazilizan2, userBrazilizan3, userAmerican2, userAmerican3] 
    const array2: User3[] = [userBrazilizan2, userBrazilizan3, userAmerican1, userAmerican4]
    const result1 = verifyAge(casinao, array)
    const result2 = verifyAge(cbgb, array)
    const result3 = verifyAge(cbgb, array2)

    expect(result1.brazilians.allowed).toContain("José")
    expect(result1.americans.allowed).toContain("John")
    expect(result2.americans.unallowed).toContain("Johnny")
    expect(result2.americans.unallowed).toContain("Paul")
    expect(result2.brazilians.unallowed).toContain("Leticia")
    expect(result2.brazilians.unallowed).toContain("Karen")
    expect(result3.brazilians.unallowed).toContain("Leticia")
    expect(result3.brazilians.unallowed).toContain("Karen")
    expect(result3.americans.allowed).toContain("John")
    expect(result3.americans.allowed).toContain("David")
})