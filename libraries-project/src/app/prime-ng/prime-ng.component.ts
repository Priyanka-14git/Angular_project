import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNGComponent {
  // In your component.ts
 name = '';

 constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success!', detail: 'Your action was successful!' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Something went wrong!' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Heads up!', detail: 'Here is some information.' });
  }


}
