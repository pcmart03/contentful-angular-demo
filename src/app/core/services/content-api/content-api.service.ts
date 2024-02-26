import { Injectable } from '@angular/core';
import {
  createClient,
  EntriesQueries,
  EntryCollection,
  EntrySkeletonType,
} from 'contentful';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentApiService {
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    environment: environment.contentful.environment,
  });

  getEntries<T extends EntrySkeletonType>(
    query: EntriesQueries<any, any> = {},
  ): Promise<EntryCollection<T>> {
    return this.client.getEntries<T>(query);
  }

  getEntryById<T extends EntrySkeletonType>(entryId: string, query?: any) {
    console.log(entryId);
    return this.client.getEntry<T>(entryId, query);
  }
}
