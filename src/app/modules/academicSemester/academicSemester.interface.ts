import { Model } from 'mongoose';
export type TSemisterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TSemisterTitle = 'Autumn' | 'Summer' | 'Fall';
export type TSemisterCode = '01' | '02' | '03';

export type TAcademicSemister = {
  title: TSemisterTitle;
  year: number;
  code: TSemisterCode;
  startMonth: TSemisterMonth;
  endMonth: TSemisterMonth;
};

export type AcademicSemisterModel = Model<TAcademicSemister>;
