import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {
  @Output() newClickEvent = new EventEmitter();
  public closeResult: string | undefined;
  faCirclePlus = faCirclePlus;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.newClickEvent.emit();
  }

  open(content: any) {
    this.modalService.open(content);
  }


}
