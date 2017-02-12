import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';   

export class Conta {
  agencia: string;
  conta: string;
  saldo: number;
 
  constructor(agencia: string, conta: string, saldo: number) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
}

@Injectable()
export class TransactionService {
  accountList: Conta[] = [
      new Conta ('0001','1',100),
      new Conta ('0001','2',100),
      new Conta ('0001','3',100),
      new Conta ('0001','4',100)
  ] 

public transfereDinheiro(agencia1: string,conta1: string, agencia2: string, conta2: string, valor: number){

        for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i].agencia == agencia1 && 
                this.accountList[i].conta == conta1 && 
                this.accountList[i].saldo > valor &&
                agencia1 !== agencia2 && 
                conta1 !== conta2) {

                    return this.accountList[i].saldo;      

                } else {

                    return Observable.throw("Dados inválidos");
                
            }
        }
    }
}