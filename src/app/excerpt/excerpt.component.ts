import { Component, Input, OnInit } from '@angular/core';

interface excerpt {
  source: string,
  category: string,
  excerpt: string,
  thoughts: string,
  date: number
}

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.css']
})
export class ExcerptComponent implements OnInit {
  @Input() props: excerpt | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
