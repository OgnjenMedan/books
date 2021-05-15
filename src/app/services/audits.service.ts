import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private client: HttpClient) { }

  public getAudits(): Observable<any> {
    return this.client.get(this.SERVER_URL + 'audits');
  }

  public getBookAudits(bookId: number) {
    return this.client.get(`${this.SERVER_URL + 'audits'}/${bookId}`);
  }

  public createAudit(audit: { id?: number, previousValue: string, newValue: string, timestamp: Date, bookId: number }): Observable<any> {
    return this.client.post(`${this.SERVER_URL + 'audits'}`, audit)
  }
}
