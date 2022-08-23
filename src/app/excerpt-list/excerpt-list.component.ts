import { Component, OnInit } from '@angular/core';

interface excerpt {
  origin: string,
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
  public excerptData: excerpt[] = [
    {
      origin: "something far out",
      category: "Film",
      excerpt: "Life do be like that sometimes",
      thoughts: "Wow, that's really deep",
      date: Date.now()
    },
    {
      origin: "Thomas Jefferson",
      category: "Book",
      excerpt: "God I hate the UK and King George VI",
      thoughts: "I dunno I'm kinda offended",
      date: Date.now()
    },
    {
      origin: "Jojos Amazing Adventure",
      category: "TV",
      excerpt: "The North Wind made the Vikings",
      thoughts: "I suppose it's true",
      date: Date.now()
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
