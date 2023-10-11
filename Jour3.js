class Pokemon 
{
    constructor (name, attack, defense, hp, luck)
    {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky()
    {
        return Math.random() <= this.luck;
    }

    attackPokemon(target)
    {
        if (this.isLucky()) 
        {
            const damage = this.attack - target.defense;
            if (damage > 0) 
            {
              target.hp -= damage;
            }
            console.log(`${this.name} attaque ${target.name} et inflige ${damage} dégâts.`);
        } 
        else 
        {
            console.log(`${this.name} rate son attaque contre ${target.name}.`);
        }
    }
}

let Salameche = new Pokemon("Salameche", 10, 20, 30, 0.75);

let Bulbizare = new Pokemon("Bulbizare", 15, 40, 30, 0.25);

/*while (Salameche.hp > 0 && Bulbizare.hp > 0)
{
    Salameche.attackPokemon(Bulbizare);
    console.log(`${Bulbizare.name} a ${Bulbizare.hp} points de vie restants.`);
  
    if (Bulbizare.hp <= 0) {
      console.log(`${Bulbizare.name} est vaincu !`);
      break;
    }
  
    Bulbizare.attackPokemon(Salameche);
    console.log(`${Salameche.name} a ${Salameche.hp} points de vie restants.`);
  
    if (Salameche.hp <= 0) {
      console.log(`${Salameche.name} est vaincu !`);
      break;
    }
}*/

