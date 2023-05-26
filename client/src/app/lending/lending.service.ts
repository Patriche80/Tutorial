import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Lending } from './model/Lending';
import { LendingPage } from './model/LendingPage'
import { LENDING_DATA } from './model/mock-lendings';
import { MatPaginatorModule } from '@angular/material/paginator';



@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(
    private http: HttpClient
  ) { }

  getLendings(pageable: Pageable, gameId?: number, clientId?: number, date?: Date): Observable<LendingPage> {
    return this.http.post<LendingPage>(this.composeFindUrl(gameId, clientId, date), {pageable:pageable});
    //return of(LENDING_DATA);
  } 

  saveLending(lending: Lending): Observable<void> {
        
        return this.http.put<void>('http://localhost:8080/lending', lending);
    
    //return of(null);
  }

  deleteLending(idLending : number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/lending/'+idLending);
    
    //return of(null);
  }

  private composeFindUrl (gameId?: number, clientId?: number, date?: Date): string {
    let params='';

    if (gameId != null) {
      params += 'gameId=' + gameId;
    }

    if (clientId != null) {
      if (params != '') params += "&";
      params += 'clientId=' + clientId;
    }

    if (date != null) {
      if (params != '') params += "&";
      params += 'date=' + date.toLocaleDateString();
    }

    let url = 'http://localhost:8080/lending';

    if (params == '') {
      return url;
    } else {
      return url + '?' + params;
    }

  }

}