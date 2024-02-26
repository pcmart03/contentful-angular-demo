import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ContentApiService } from '../content-api/content-api.service';
import { ApplicationStepContentSkeleton } from '../../content-types/application-step.content-types';
import { BehaviorSubject, from, map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepIdService {
  readonly #api = inject(ContentApiService);
  #stepsLoaded = false;

  #steps = new BehaviorSubject(new Map<string, string>());

  getStepId(slug: string): Observable<string | undefined> {
    if (!this.#stepsLoaded) {
      this.loadSteps();
    }
    return this.#steps.pipe(map((steps) => steps.get(slug)));
  }

  private async loadSteps() {
    const stepEntries =
      await this.#api.getEntries<ApplicationStepContentSkeleton>({
        content_type: 'applicationStep',
        select: ['sys.id', 'fields.slug'],
      });
    const stepMap = stepEntries.items.reduce((acc, item) => {
      // @ts-ignore
      acc.set(item.fields.slug, item.sys.id); //Contentful types don't play nice
      return acc;
    }, new Map<string, string>());

    this.#steps.next(stepMap);
    this.#stepsLoaded = true;
  }
}
