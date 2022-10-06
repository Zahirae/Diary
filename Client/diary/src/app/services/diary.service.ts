import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diary } from '../diary';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root',
})

export class DiaryService {

  private url = 'http://127.0.0.1:8000/api/diaries';

  constructor(private httpClient: HttpClient) {

   }

   public getAll(): Promise<Array<Diary>> {
    return this.httpClient.get<Array<Diary>>(this.url).toPromise();
  }

  public get(id: number): Observable<Diary> {
    return this.httpClient.get<Diary>(`${this.url}/${id}`);
  }

  public add(newDiary: Diary): Observable<Diary>{
    return this.httpClient.post<Diary>(`${this.url}`, newDiary, httpOptions);
  }

  public update(id: number, updatedDiary: Diary): Observable<Diary>  {
    return this.httpClient.put<Diary>(`${this.url}/${id}`, updatedDiary, httpOptions);
  }

  /*public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`, httpOptions);
  }*/
}
