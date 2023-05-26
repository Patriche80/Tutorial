import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';




@NgModule({
  declarations: [
    HeaderComponent,
    DialogConfirmationComponent,
    DialogErrorComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MatIconModule, 
    MatToolbarModule,    
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
})
export class CoreModule { }
