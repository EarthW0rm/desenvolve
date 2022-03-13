export class Correntista {
    constructor(_nomeSocial: string, _numeroConta: string) {
        this.NomeSocial = _nomeSocial
        this.NumeroConta = _numeroConta
    }

    NomeSocial: string;
    NumeroConta: string;

    
}

export class PessoaFisica extends Correntista {
    constructor(_nomeSocial: string, _numeroConta: string, _numeroCpf: string) {
        super(_nomeSocial, _numeroConta)

        this.NumeroCpf =  _numeroCpf
    }

    NumeroCpf : string;
}

export class PessoaJuridica extends Correntista {
    constructor(_nomeSocial: string, _numeroConta: string, _numeroCnpj: string) {
        super(_nomeSocial, _numeroConta)

        this.NumeroCnpj =  _numeroCnpj
    }

    NumeroCnpj : string;
}