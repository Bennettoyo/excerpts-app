import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() control: FormControl | undefined;
  @Input() label: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
