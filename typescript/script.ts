//Classe figlio
class Son
{
    //Campi
    balanceinit :number

    //Metodi
    //Costruttore
    constructor()
    {
        this.balanceinit = 0
    }

    //Deposito
    oneDepositeNumber(deposit:number) :number
    {
        this.balanceinit += deposit
        console.log("Bilancio attuale " + this.balanceinit)
        return this.balanceinit
    }
    //Prelievo
    oneWithDraw(withdrawal:number) :number
    {
        //Se ritiro più di quanto ho
        if(this.balanceinit - withdrawal < 0)
        {
            withdrawal = this.balanceinit
            this.balanceinit = 0
        }
        else
            this.balanceinit -= withdrawal
        return withdrawal
    }
    //Interesse

}

//Classe madre che eredita il figlio (?)
class Mother extends Son
{
    constructor()
    {
        super()
    }

    //Interesse
    addInterest(money: number): number
    {
        return money * 0.1
    }

    //Deposito
    oneDepositeNumber(deposit:number) :number
    {
        //Calcolo bilancio
        this.balanceinit += (deposit + this.addInterest(deposit))
        return this.balanceinit
    }

}


const son = new Son()
son.oneDepositeNumber(500)
son.oneDepositeNumber(200)
son.oneWithDraw(100)
son.oneWithDraw(800)

const mother = new Mother() 
mother.oneDepositeNumber(100)
mother.oneWithDraw(20)

console.log(son)
console.log(mother)