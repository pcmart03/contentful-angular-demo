import * as Contentful from 'contentful';

export type ParagraphContentFields = {
  title: Contentful.EntryFields.Symbol;
  paragraphId: Contentful.EntryFields.Symbol;
  text: Contentful.EntryFields.Text;
};

export type ParagraphContentSkeleton = Contentful.EntrySkeletonType<
  ParagraphContentFields,
  'applicationParagraph'
>;

export type ProseContentFields = {
  title: Contentful.EntryFields.Symbol;
  proseId: Contentful.EntryFields.Symbol;
  prose: Contentful.EntryFields.Text;
};

export type ProseContentSkeleton = Contentful.EntrySkeletonType<
  ProseContentFields,
  'applicationProse'
>;
