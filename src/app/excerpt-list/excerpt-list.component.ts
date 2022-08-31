import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HandleDataService } from '../handle-data.service';
import { IExcerpt } from '../interfaces/Excerpt';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-excerpt-list',
  templateUrl: './excerpt-list.component.html',
  styleUrls: ['./excerpt-list.component.css']
})
export class ExcerptListComponent implements OnInit {
  public excerptData: Observable<IExcerpt[]> = new Observable()

  constructor(private handleData: HandleDataService) {
  }

  ngOnInit(): void {
    this.fetchExcerpts();
  }

  onChange(value: string) {
    if (value !== 'All') {
      this.handleData.filterExcerpts(value);
    } else {
      this.fetchExcerpts()
    }
  }

  private fetchExcerpts(): void {
    this.excerptData = this.handleData.getExcerpts();
  }


  deleteExcerpt(id: string): void {
    this.handleData.deleteExcerpt(id).subscribe({
      next: () => this.fetchExcerpts()
    });
  }

  // onScroll() {
  //   console.log("scrolled!!");
  // }
}
