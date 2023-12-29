interface Item {
  id: number;
  name: string;
}
interface Hability {
  id: number;
  name: string;
}

interface PokemonType {
  id: number;
  name: string;
}

interface Evolution {
  id: number;
  name: string;
}

interface Move {
  id: number;
  name: string;
  power: number;
}

interface PokemonEvoLution {}

interface Pokemon {
  id: number;
  name: string;
  description: string;
  evolution: Pokemon | "None";
  types: {
    slot1: PokemonType;
    slot2?: PokemonType;
  };
  stats: [
    { defense: number; statGrow: number },
    { attack: number; statGrow: number },
    { specialAttack: number; statGrow: number },
    { specialDefense: number; statGrow: number },
    { speed: number; statGrow: number }
  ];
  moves: Move[];
  sprite: string;
  location: string;
  items?: Item;
  hability: Hability;
  Evolution: Evolution;
  EvolutionForms?: Evolution[];
}
