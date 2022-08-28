import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() control: FormControl | undefined;
  @Input() label: string | undefined;
  @Input() rows: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
