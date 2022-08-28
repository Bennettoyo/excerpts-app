import { Injectable } from '@angular/core';

interface excerpt {
  source: string,
  category: string,
  excerpt: string,
  thoughts: string,
  date: number
}

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  public excerptData: excerpt[] = [
    {
      source: "something far out",
      category: "Film",
      excerpt: "Life do be like that sometimes",
      thoughts: "Wow, that's really deep",
      date: Date.now()
    },
    {
      source: "Thomas Jefferson",
      category: "Book",
      excerpt: "God I hate the UK and King George VI",
      thoughts: "I dunno I'm kinda offended",
      date: Date.now()
    },
    {
      source: "Jojos Amazing Adventure",
      category: "TV",
      excerpt: "The North Wind made the Vikings",
      thoughts: "I suppose it's true",
      date: Date.now()
    },
  ]

  constructor() { }

  getExcerpts() {
    return this.excerptData;
  }

  postExcerpt(excerpt: any) {
    this.excerptData.unshift(excerpt.value);
  }
}
