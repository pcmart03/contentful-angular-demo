import * as Contentful from 'contentful';
import {
  ParagraphContentSkeleton,
  ProseContentSkeleton,
} from './text.content-types';
import { FormControlContentSkeleton } from './form-control.content-types';

export type ApplicationStepContentFields = {
  slug: Contentful.EntryFields.Text;
  title: Contentful.EntryFields.Text;
  sections: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<ApplicationStepSectionContentSkeleton>
  >;
};

export type ApplicationStepContentSkeleton = Contentful.EntrySkeletonType<
  ApplicationStepContentFields,
  'applicationStep'
>;

export type ApplicationStepSectionContentFields = {
  sectionId: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  helpText: Contentful.EntryFields.EntryLink<ParagraphContentSkeleton>;
  controls: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<FormControlContentSkeleton>
  >;
  prose: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<ProseContentSkeleton>
  >;
  subsections: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<ApplicationStepSectionContentSkeleton>
  >;
};

export type ApplicationStepSectionContentSkeleton =
  Contentful.EntrySkeletonType<
    ApplicationStepSectionContentFields,
    'applicationStepSection'
  >;

export type ApplicationStepSectionContent =
  Contentful.Entry<ApplicationStepSectionContentSkeleton>;
