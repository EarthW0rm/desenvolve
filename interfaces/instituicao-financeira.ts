import { Correntista } from "../correntista";

export interface IInstituicaoFinanceira {

    nomeInstituicao: string;
    cnpjInstituicao: string;
    codigoBanco: Number;

    AbreConta(_nomeSocial: string, _documento: string, saldoInicial: Number) : Correntista;
    EfetuaDeposito(_contaCorrente: Correntista, valorDeposito: Number) : void;

    EfetuaSaque(correntista: Correntista, valorTransacao: Number) : void;
    ExibeSaldo(correntista: Correntista): Number;
    EfetuaTransferencia(correntistaFrom: Correntista, correntistaTo: Correntista, valorTransacao: Number) : void;
    EfetuaPagamento(correntista: Correntista, valorTransacao: Number) : void;
}