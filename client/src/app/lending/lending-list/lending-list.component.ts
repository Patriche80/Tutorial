import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { LendingEditComponent } from '../lending-edit/lending-edit.component';
import { LendingService } from '../lending.service';
import { Lending } from '../model/Lending';
import { Game } from 'src/app/game/model/Game';
import { GameService } from 'src/app/game/game.service';
import { Client } from 'src/app/client/model/Client';
import { ClientService } from 'src/app/client/client.service';


@Component({
    selector: 'app-lending-list',
    templateUrl: './lending-list.component.html',
    styleUrls: ['./lending-list.component.scss']
})


export class LendingListComponent implements OnInit {

    games: Game[];
    clients: Client[];

    filterTitle: Game;
    filterClient: Client;
    filterDate: Date;    
    
    dataSource = new MatTableDataSource<Lending>();

    displayedColumns: string[] = ['id', 'game', 'client', 'startLendingDate', 'finishLendingDate', 'action'];

    pageNumber: number = 0;
    pageSize: number = 5;
    totalElements: number = 0;

    
    constructor(
        private lendingService: LendingService,
        private gameService: GameService,
        private clientService: ClientService,
        public dialog: MatDialog,
    ) { }


        ngOnInit(): void {

            this.loadPage();

            this.gameService.getGames().subscribe(
                games => this.games = games
            );

            this.clientService.getClients().subscribe(
                clients => this.clients = clients
            );

        }

        createLending() {
            const dialogRef = this.dialog.open(LendingEditComponent, {
                data: {}
            });

            dialogRef.afterClosed().subscribe(result => {
                this.ngOnInit();
            });
        }

        onCleanFilter(): void {
            this.filterTitle = null;
            this.filterClient = null;
            this.filterDate = null;

            this.onSearch();
        }

        onSearch(): void {
            this.loadPage();
        }


        loadPage(event?: PageEvent) {

            let pageable: Pageable = {
                pageNumber: this.pageNumber,
                pageSize: this.pageSize,
                sort: [{
                    property: 'id',
                    direction: 'ASC'
                }]
            }

            if (event != null) {
                pageable.pageSize = event.pageSize
                pageable.pageNumber = event.pageIndex;
            }

            let gameId = this.filterTitle != null ? this.filterTitle.id : null;
            let clientId = this.filterClient != null ? this.filterClient.id : null;
            let date = this.filterDate; // != null ? this.filterDate : null;
            
            this.lendingService.getLendings(pageable, gameId, clientId, date).subscribe(data => {
                this.dataSource.data = data.content;
                this.pageNumber = data.pageable.pageNumber;
                this.pageSize = data.pageable.pageSize;
                this.totalElements = data.totalElements;
            });

        }
        

        deleteLending(lending: Lending) {
            const dialogRef = this.dialog.open(DialogConfirmationComponent, {
                data: { title: "Eliminar Préstamo", description: "Atención si borra el préstamo se perderán sus datos.<br> ¿Desea eliminarlo?" }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.lendingService.deleteLending(lending.id).subscribe(result => {
                        this.ngOnInit();
                    });
                }
            });
        }
}


