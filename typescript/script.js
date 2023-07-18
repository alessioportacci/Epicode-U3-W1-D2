var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classe figlio
var Son = /** @class */ (function () {
    //Metodi
    //Costruttore
    function Son() {
        this.balanceinit = 0;
    }
    //Deposito
    Son.prototype.oneDepositeNumber = function (deposit) {
        this.balanceinit += deposit;
        console.log("Bilancio attuale " + this.balanceinit);
        return this.balanceinit;
    };
    //Prelievo
    Son.prototype.oneWithDraw = function (withdrawal) {
        //Se ritiro più di quanto ho
        if (this.balanceinit - withdrawal < 0) {
            withdrawal = this.balanceinit;
            this.balanceinit = 0;
        }
        else
            this.balanceinit -= withdrawal;
        return withdrawal;
    };
    return Son;
}());
//Classe madre che eredita il figlio (?)
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        return _super.call(this) || this;
    }
    Mother.prototype.addInterest = function () {
        this.balanceinit += (this.balanceinit * 0, 1);
    };
    return Mother;
}(Son));
var son = new Son();
var mother = new Mother();
console.log(son);
