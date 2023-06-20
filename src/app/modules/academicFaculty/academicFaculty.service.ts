import { TAcademicFaculty } from './academicFaculty.interface';
import ACADEMICFACULTY from './academicFaculty.model';

const getFacultyDB = async (): Promise<TAcademicFaculty[]> => {
  const data: TAcademicFaculty[] = await ACADEMICFACULTY.find();
  if (data === null) {
    throw new Error('Faculty not found');
  } else {
    return data;
  }
};

const getAFacultyDB = async (id: string): Promise<TAcademicFaculty> => {
  const data: TAcademicFaculty | null = await ACADEMICFACULTY.findById(id);
  if (data === null) {
    throw new Error('Faculty not found');
  } else {
    return data;
  }
};

const deleteAFacultyDB = async (id: string): Promise<TAcademicFaculty> => {
  const data: TAcademicFaculty | null = await ACADEMICFACULTY.findByIdAndDelete(
    id
  );
  if (data === null) {
    throw new Error('Faculty not found');
  } else {
    return data;
  }
};
const updateAFacultyDB = async (
  id: string,
  updateDocument: Partial<TAcademicFaculty>
): Promise<TAcademicFaculty> => {
  const data: TAcademicFaculty | null = await ACADEMICFACULTY.findByIdAndUpdate(
    id,
    updateDocument
  );
  if (data === null) {
    throw new Error('Faculty not found');
  } else {
    return data;
  }
};

const academicFacultyService = {
  getFacultyDB,
  getAFacultyDB,
  deleteAFacultyDB,
  updateAFacultyDB,
};
export default academicFacultyService;
