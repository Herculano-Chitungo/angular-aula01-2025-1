export class Cliente {

  constructor(
    public nome: string,
    public saldo: number,
    public ultimoLogin: Date,
  ){
  }

  public get creditoPreAprovado(): number {
    if (this.saldo >= 50) {
      return 100;
    }
    return 0;
  }

}
