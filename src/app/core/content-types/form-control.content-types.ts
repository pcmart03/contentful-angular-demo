import * as Contentful from 'contentful';

export type FormControlContentFields = {
  controlId: Contentful.EntryFields.Symbol;
  label: Contentful.EntryFields.Text;
  hint: Contentful.EntryFields.Text;
  errors: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<FormControlErrorContentSkeleton>
  >;
  options: Contentful.EntryFields.Array<
    Contentful.EntryFields.EntryLink<FormControlOptionContentSkeleton>
  >;
  required: Contentful.EntryFields.Boolean;
};

export type FormControlContentSkeleton = Contentful.EntrySkeletonType<
  FormControlContentFields,
  'formControl'
>;

export type FormControlErrorContentFields = {
  errorId: Contentful.EntryFields.Symbol;
  message: Contentful.EntryFields.Text;
};

export type FormControlErrorContentSkeleton = Contentful.EntrySkeletonType<
  FormControlErrorContentFields,
  'formControlErrorMessage'
>;

export type FormControlOptionContentFields = {
  label: Contentful.EntryFields.Text;
  value: Contentful.EntryFields.Text;
};

export type FormControlOptionContentSkeleton = Contentful.EntrySkeletonType<
  FormControlOptionContentFields,
  'formControlOption'
>;
