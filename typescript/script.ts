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
    addInterest()
    {
        this.balanceinit += (this.balanceinit * 0,1)
    }
}


const son = new Son()
const mother = new Mother() 
console.log(son)
