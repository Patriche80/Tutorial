import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClientService } from '../client.service';
import { Client } from '../model/Client';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogErrorComponent } from 'src/app/core/dialog-error/dialog-error.component';
import { MatSnackBar} from '@angular/material/snack-bar'



@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})

export class ClientEditComponent implements OnInit {

  client : Client;
  private errorMessage: string;
   

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    
  ) { }

  ngOnInit(): void {
    if (this.data.client != null) {
      this.client = Object.assign({}, this.data.client);
    }
    else {
      this.client = new Client();
    }
  }


onSave() {
    this.clientService.saveClient(this.client).subscribe({
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

