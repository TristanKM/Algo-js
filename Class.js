/*class Pokemon 
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

let Salameche = new Pokemon("Salameche", 10, 25, 30, 0.75);

let Bulbizare = new Pokemon("Bulbizare", 15, 20, 30, 0.25);

while ( Salameche.hp > 100 && Bulbizare.hp > 100)
{
    Salameche.attackPokemon(Bulbizare)
    console.log (Bulbizare.name + "a " + Bulbizare.hp + " points de vie restants.")

    if ( Bulbizare.hp < 0)
    {
        console.log ( Bulbizare.name + " est mort.")
        break
    }

    Bulbizare.attackPokemon(Salameche)
    console.log (Salameche.name + "a " + Salameche.hp + " points de vie restants.")

    if ( Salameche.hp < 0)
    {
        console.log ( Salameche.name + " est mort.")
        break
    }
}



while (Salameche.hp > 0 && Bulbizare.hp > 0)
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

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() <= this.luck;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp -= damage;
        }
        console.log(`${this.name} attaque ${target.name} et inflige ${damage} dégâts.`);
      } else {
        console.log(`${this.name} rate son attaque contre ${target.name}.`);
      }
    }
  }
  
  // Créer deux instances de Pokemon avec des stats différentes
  const pikachu = new Pokemon("Pikachu", 30, 20, 100, 0.3);
  const charmander = new Pokemon("Charmander", 25, 15, 110, 0.4);
  
  // Simulation de la bataille
  while (pikachu.hp > 0 && charmander.hp > 0) {
    pikachu.attackPokemon(charmander);
    console.log(`${charmander.name} a ${charmander.hp} points de vie restants.`);
  
    if (charmander.hp <= 0) {
      console.log(`${charmander.name} est vaincu !`);
      break;
    }
  
    charmander.attackPokemon(pikachu);
    console.log(`${pikachu.name} a ${pikachu.hp} points de vie restants.`);
  
    if (pikachu.hp <= 0) {
      console.log(`${pikachu.name} est vaincu !`);
      break;
    }
  }
  