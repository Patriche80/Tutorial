import { Game } from 'src/app/game/model/Game';
import { Client } from 'src/app/client/model/Client';


export class Lending {
    id: number;
    game: Game;
    client: Client;
    startLendingDate: Date;
    finishLendingDate: Date;
}