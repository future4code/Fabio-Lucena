export type user = {
   id: string,
   name: string,
   email: string,
   hashPassword: string
}

export type AuthenticationData = {
   id: string
}

export type recipes = {
   id: string,
   title: string,
   description: string,
   date: string,
   user_id: string
}