import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
import { IExcerpt } from '../interfaces/Excerpt';
import * as moment from 'moment';

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.css']
})
export class ExcerptComponent implements OnInit {
  faTrash = faTrash;
  @Input() props: IExcerpt | undefined;
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string | undefined) {
    this.deleteEvent.emit(id);
  }

  clickMethod(props: any) {
    if (confirm("Are you sure to delete " + props.excerpt)) {
      this.deleteEvent.emit(props._id);
    }
  }
}
