import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {



  @Input() item:string|null|undefined
  @Output() onDelete = new EventEmitter 
  constructor() { }

  ngOnInit(): void {
  }

delete(){
  this.onDelete.emit(this.item)

}

}

