import { inject, Injectable } from '@angular/core';
import { ContentApiService } from '../../../core/services/content-api/content-api.service';
import { StepIdService } from '../../../core/services/step-id-service/step-id.service';
import { filter, switchMap } from 'rxjs';
import { ApplicationStepContentSkeleton } from '../../../core/content-types/application-step.content-types';

@Injectable({
  providedIn: 'root',
})
export class AccountOwnerDataService {
  #api = inject(ContentApiService);
  #stepIdService = inject(StepIdService);

  getAccountOwnerContent() {
    return this.#stepIdService.getStepId('account-owner').pipe(
      filter((id) => !!id),
      switchMap((id) =>
        this.#api.getEntryById<ApplicationStepContentSkeleton>(id as string, {
          include: 4,
          select: ['fields'],
        }),
      ),
    );
  }
}
