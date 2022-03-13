import { Correntista, PessoaFisica, PessoaJuridica } from "./correntista";
import { IInstituicaoFinanceira } from "./interfaces/instituicao-financeira";

class Transacao {
    Conta : Correntista;
    ValorTransacao : number;

    constructor(conta: Correntista, valorTransacao: number) {
        this.Conta = conta;
        this.ValorTransacao = valorTransacao;
    }
}


export class InstituicaoFinanceira implements IInstituicaoFinanceira {

    numContaAtual = 0;
    getNumeroConta() : number {
        this.numContaAtual +=1;
        return this.numContaAtual;
    }

    bancoClientes:  Array<Correntista> = []
    bancoTransacoes: Array<Transacao> = [];

    nomeInstituicao: string;
    cnpjInstituicao: string;
    codigoBanco: number;

    constructor(_nomeInstituicao: string, _cnpjInstituicao: string, _codigoBanco: number) {
        this.nomeInstituicao = _nomeInstituicao;
        this.cnpjInstituicao = _cnpjInstituicao;
        this.codigoBanco = _codigoBanco;
    }

    AbreConta(_nomeSocial: string, _documento: string, saldoInicial: number): Correntista {

        let conta : Correntista;
        if(_documento.length > 11) {
            conta =  new PessoaJuridica(_nomeSocial, this.getNumeroConta().toString(), _documento)
        } else {
            conta =  new PessoaFisica(_nomeSocial, this.getNumeroConta().toString(), _documento)
        }

        this.bancoClientes.push(conta);
        this.bancoTransacoes.push(new Transacao(conta, saldoInicial))

        return conta;
    }

    EfetuaDeposito(correntista: Correntista, valorTransacao: number): void {
        this.bancoTransacoes.push(new Transacao(correntista, valorTransacao));
    }
    
    EfetuaSaque(correntista: Correntista, valorTransacao: number): void {
        
        this.bancoTransacoes.push(new Transacao(correntista, -valorTransacao));
    }

    ExibeSaldo(correntista: Correntista): number {

        let ccSaldo : number = 0;

        const ccTrans = this.bancoTransacoes.filter((cc) => {
            return cc.Conta.NumeroConta == correntista.NumeroConta
        })
        
        for(let i = 0; i < ccTrans.length; i++) {
            let trans = ccTrans[i]
            ccSaldo += trans.ValorTransacao;
        }

        return ccSaldo;
    }

    EfetuaTransferencia(correntistaFrom: Correntista, correntistaTo: Correntista, valorTransacao: number): void {
        if(valorTransacao <= 0)
            throw new Error("A trasferencia deve possuir valor positivo");    

        this.EfetuaSaque(correntistaFrom, -valorTransacao);
        this.EfetuaDeposito(correntistaTo, valorTransacao);
        
    }
    EfetuaPagamento(correntista: Correntista, valorTransacao: number): void {
        this.EfetuaSaque(correntista, -valorTransacao);
    }

}