export class SuperHero {
  id: number;
  name: string;
  power: string;
  alterEgo?: string; // 第二人格


  constructor(id: number, name: string, power: string, alterEgo?: string) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
  }
}
