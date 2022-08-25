import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {
  public excerptForm: any;

  constructor(private modalService: NgbModal, private handleData: HandleDataService) {
    this.excerptForm = new FormGroup({
      origin: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      category: new FormControl('', [Validators.required]),
      excerpt: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]),
      thoughts: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]),
      date: new FormControl(Date.now(), [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  addItem() {
    this.modalService.dismissAll();
    this.handleData.postExcerpt(this.excerptForm);
  }
}
