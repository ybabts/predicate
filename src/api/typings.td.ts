
export interface types {
  player: player;
  match: match;
  hero: hero;
}

interface player {
  account_id: number;
  personaname: string;
  matches: match[]
}

interface match {
  match_id: number;
  duration: number;
  game_mode: number;
  radiant_win: boolean;
  players: {
    account_id: number;
    hero: hero;
  }[];
}

interface hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
}