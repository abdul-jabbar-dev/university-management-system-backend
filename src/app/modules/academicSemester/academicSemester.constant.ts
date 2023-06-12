import {
  TSemisterMonth,
  TSemisterTitle,
  TSemisterCode,
} from './academicSemester.interface';

const MONTH: TSemisterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const TITLE: TSemisterTitle[] = ['Autumn', 'Summer', 'Fall'];
const CODE: TSemisterCode[] = ['01', '02', '03'];
const academicSemesterConstant = { MONTH, TITLE, CODE };

export default academicSemesterConstant;
export const academicSemesterSearchField = [
  'title',
  'code',
  'year' /*year is number , if added any filed that type number so change getAllSemesterDB mongodb find option*/,
];
