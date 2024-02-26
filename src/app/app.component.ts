import {
  Component,
  inject,
  OnInit,
  Signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StepIdService } from './core/services/step-id-service/step-id.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    {{ stepId() }}
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'contentful-angular-demo';
  #stepService = inject(StepIdService);
  stepId: Signal<string | undefined> = toSignal(
    this.#stepService.getStepId('account-owner'),
  );
}
