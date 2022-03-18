import { Casino, LOCATION, NACIONALITY, Result, User3 } from "./model/casinoInterface";
import User from "./model/userInterface";

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    } else {
        return undefined
    }
}

export function verifyAge(casino: Casino, users: User3[]): Result {
    let allowed: User3[] = [];
    let unallowed: User3[] = [];
    let all: User3[] = []

    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          all = [...allowed, user]
          allowed = all
        } else {
          unallowed.push(user);
        }
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }
