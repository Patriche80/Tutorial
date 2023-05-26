import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LendingListComponent } from './lending-list/lending-list.component';
import { LendingEditComponent } from './lending-edit/lending-edit.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { Moment } from 'moment';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';




@NgModule({
  declarations: [
    LendingListComponent,
    LendingEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    MatOptionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatNativeDateModule,
    DatePipe,
  ],
  providers: [
    {
        provide: MAT_DIALOG_DATA,
        useValue: {},
    },
]
})
export class LendingModule { }
