import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../handle-data.service';

interface excerpt {
  source: string,
  category: string,
  excerpt: string,
  thoughts: string,
  date: number
}

@Component({
  selector: 'app-excerpt-list',
  templateUrl: './excerpt-list.component.html',
  styleUrls: ['./excerpt-list.component.css']
})
export class ExcerptListComponent implements OnInit {
  public excerptData: excerpt[] = []

  constructor(private handleData: HandleDataService) {
    this.getExcerptData();
  }

  ngOnInit(): void {
  }

  getExcerptData() {
    this.excerptData = this.handleData.excerptData;
  }
}
