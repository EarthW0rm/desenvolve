import { InstituicaoFinanceira } from "./instituicao-financeira";

class Main {
    constructor() {}

    Execute() {
        console.log("Programa bancario inciando");

        const BancoItau = new InstituicaoFinanceira("Banco Itaú", "00.000.000.000/0001-00", 345)

        const c1 = BancoItau.AbreConta("Marco Faustino", "9999999944", 100);
        const c2 = BancoItau.AbreConta("Gregorio", "9999999945", 110);
        const c3 = BancoItau.AbreConta("Thiago", "9999999999999945", 1230);

        console.log(`O Saldo do Marco é: ${BancoItau.ExibeSaldo(c1)}`)
        console.log(`O Saldo do Gregorio é: ${BancoItau.ExibeSaldo(c2)}`)
        console.log(`O Saldo do Thiago é: ${BancoItau.ExibeSaldo(c3)}`)

        BancoItau.EfetuaDeposito(c1, 20)
        BancoItau.EfetuaDeposito(c2, 20)
        BancoItau.EfetuaDeposito(c3, 20)

        console.log(`O Saldo do Marco é: ${BancoItau.ExibeSaldo(c1)}`)
        console.log(`O Saldo do Gregorio é: ${BancoItau.ExibeSaldo(c2)}`)
        console.log(`O Saldo do Thiago é: ${BancoItau.ExibeSaldo(c3)}`)

        BancoItau.EfetuaTransferencia(c3, c1, 100)
        BancoItau.EfetuaTransferencia(c3, c2, 100)

        console.log(`O Saldo do Marco é: ${BancoItau.ExibeSaldo(c1)}`)
        console.log(`O Saldo do Gregorio é: ${BancoItau.ExibeSaldo(c2)}`)
        console.log(`O Saldo do Thiago é: ${BancoItau.ExibeSaldo(c3)}`)

        BancoItau.EfetuaPagamento(c1, 1250)


        BancoItau.EfetuaSaque(c1, 2250)
        

        console.log(`O Saldo do Marco é: ${BancoItau.ExibeSaldo(c1)}`)
        console.log(`O Saldo do Gregorio é: ${BancoItau.ExibeSaldo(c2)}`)
        console.log(`O Saldo do Thiago é: ${BancoItau.ExibeSaldo(c3)}`)

        // console.log(`O Saldo do Marco é: ${BancoItau.ExibeSaldo(c1)}`)
        // console.log(`O Saldo do Gregorio é: ${BancoItau.ExibeSaldo(c2)}`)
        // console.log(`O Saldo do Thiago é: ${BancoItau.ExibeSaldo(c3)}`)



        





    }
}

const mainProgram : Main = new Main();
mainProgram.Execute();