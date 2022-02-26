export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){
        return this.cpf 
    }
    public getName(){
        return this.name 
    }

    public getAge(){
        return this.age
    }

    public getBalance(){
        return this.balance
    }

    public getTransaction(){
        return this.transactions 
    }

    public setCpf(newCpf: string){
        this.cpf = newCpf
    }
    public setName(newName: string){
        this.name = newName
    }

    public setAge(newAge: number){
        this.age = newAge
    }

    public setBalance(newBalance: number){
        this.balance = newBalance
    }

    public setTransaction(newTransactions: Transaction[]){
        this.transactions = newTransactions
    }

  
  }

export class Transaction{
   private description: string;
   private value: number;
   private date: string;

   constructor(date: string, value: number, description: string){
       this.description = description;
       this.value = value;
       this.date = date
   }

   public getDescription(){
       return this.description
   }

   public getValue(){
       return this.value
   }

   public getDate(){
       return this.value
   }

   public setDescription(newDescription: string){
       this.description = newDescription
   }

   public setValue(newValue: number){
       this.value = newValue
   }

   public setDate(newDate: string){
       this.date = newDate
   }
  }