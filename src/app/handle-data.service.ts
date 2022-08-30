import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { IExcerpt } from './interfaces/Excerpt';


@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  private url = 'http://localhost:5200';
  private excerptData: Subject<IExcerpt[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshExcerpts() {
    this.httpClient.get<IExcerpt[]>(`${this.url}/excerpts`)
      .subscribe(excerpts => {
        this.excerptData.next(excerpts);
      });
  }

  // private filteringExcerpts(value: string) {
  //   this.httpClient.get<IExcerpt[]>(`${this.url}/excerpts`)
  //     .subscribe(excerpts => {
  //       this.excerptData.next(excerpts.filter(x => x.category === value));
  //     });
  // }

  // filterExcerpts(value: string) {
  //   this.filteringExcerpts(value);
  //   this.excerptData.pipe(
  //     map(x => x.filter(s => s.category === value))
  //   );
  // }

  getExcerpts(): Subject<IExcerpt[]> {
    this.refreshExcerpts();
    return this.excerptData;
  }

  createExcerpt(excerpt: IExcerpt): Observable<string> {
    console.log(excerpt)
    return this.httpClient.post(`${this.url}/excerpts`, excerpt, { responseType: 'text' });
  }

  deleteExcerpt(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/excerpts/${id}`, { responseType: 'text' });
  }
}
