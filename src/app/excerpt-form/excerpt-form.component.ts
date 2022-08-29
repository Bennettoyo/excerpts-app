import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-excerpt-form',
  templateUrl: './excerpt-form.component.html',
  styleUrls: ['./excerpt-form.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ExcerptFormComponent implements OnInit {
  public excerptForm: any;
  public date: string = moment().format("Do MMM YYYY");

  constructor(private modalService: NgbModal, private handleData: HandleDataService) {
    this.excerptForm = new FormGroup({
      source: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      excerpt: new FormControl('', [Validators.required]),
      thoughts: new FormControl('', [Validators.required]),
      date: new FormControl(this.date),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.excerptForm.valid) {
      this.modalService.dismissAll();
      this.handleData.createExcerpt(this.excerptForm.value).subscribe({
        next: () => {
          this.handleData.getExcerpts();
        },
        error: (error) => {
          alert("Failed to create excerpt");
          console.error(error);
        }
      });
      this.excerptForm.reset(
        this.excerptForm = new FormGroup({
          source: new FormControl('', [Validators.required]),
          category: new FormControl('', [Validators.required]),
          excerpt: new FormControl('', [Validators.required]),
          thoughts: new FormControl('', [Validators.required]),
          date: new FormControl(this.date),
        })
      );
    }
  }
}
