import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogErrorComponent } from 'src/app/core/dialog-error/dialog-error.component';
import { ClientService } from 'src/app/client/client.service';
import { Client } from 'src/app/client/model/Client';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { LendingService } from '../lending.service';
import { Lending } from '../model/Lending';


@Component({
  selector: 'app-lending-edit',
  templateUrl: './lending-edit.component.html',
  styleUrls: ['./lending-edit.component.scss']
})

export class LendingEditComponent implements OnInit{

  lending : Lending;
  games: Game[];
  clients: Client[];


  constructor(  
      public dialogRef: MatDialogRef<LendingEditComponent>,
      //@Inject(MAT_DIALOG_DATA) public data: any,
      private lendingService: LendingService,
      private gameService: GameService,
      private clientService: ClientService,
      public dialog: MatDialog,
  ) { }

    ngOnInit(): void {

        this.lending = new Lending();
            
        this.gameService.getGames().subscribe(
            games =>  { 
                this.games = games
            }
        );

        this.clientService.getClients().subscribe(
            clients => { 
                this.clients = clients
            }
        );
    }

    onSave() {
        this.lendingService.saveLending(this.lending).subscribe({
          next: () => { this.dialogRef.close()},
          error: (error: HttpErrorResponse) => {
            this.dialog.open(DialogErrorComponent, {
              data: { message: error.error.message}
            });
          }
        });
      }

    onClose() {
        this.dialogRef.close();
    }

}
