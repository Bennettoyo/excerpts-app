import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { IExcerpt } from './interfaces/Excerpt';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  private url = 'https://excerptserver.jackbennetto.co.uk';
  private excerptData: Subject<IExcerpt[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshExcerpts() {
    this.httpClient.get<IExcerpt[]>(`${this.url}/excerpts`)
      .subscribe(excerpts => {
        excerpts.sort((a, b) => {
          const date1: Date = new Date(a.date);
          const date2: Date = new Date(b.date);
          return date2.getTime() - date1.getTime();
        });
        this.excerptData.next(excerpts);
      });
  }

  private filteringExcerpts(value: string) {
    this.httpClient.get<IExcerpt[]>(`${this.url}/excerpts`)
      .subscribe(excerpts => {
        this.excerptData.next(excerpts.filter(x => x.category === value));
      });
  }

  filterExcerpts(value: string) {
    this.filteringExcerpts(value);
    this.excerptData.pipe(
      map(x => x.filter(s => s.category === value))
    );
  }

  getExcerpts(): Subject<IExcerpt[]> {
    this.refreshExcerpts();
    return this.excerptData;
  }

  createExcerpt(excerpt: IExcerpt): Observable<string> {
    // console.log(excerpt)
    return this.httpClient.post(`${this.url}/excerpts`, excerpt, { responseType: 'text' });
  }

  deleteExcerpt(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/excerpts/${id}`, { responseType: 'text' });
  }
}
