import { Component, inject } from '@angular/core';
import { AccountOwnerDataService } from '../../data-access/account-owner-data/account-owner-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-owner',
  standalone: true,
  imports: [CommonModule],
  template: `<pre>{{ content() | json }}</pre>`,
  styles: ``,
})
export class AccountOwnerComponent {
  #contentService = inject(AccountOwnerDataService);
  content = toSignal(this.#contentService.getAccountOwnerContent());
}
