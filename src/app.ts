import express, { Application } from 'express';
import cors from 'cors';
import UserRoute from './app/modules/user/user.router';
import GlobalEmailHandleMiddleware from './middlewares/globalErrorHandle';
import AcademicSemisterRoute from './app/modules/academicSemester/academicSemester.route';
import MyError from './Errors';
import AcademicFacultyRoute from './app/modules/academicFaculty/academicFaculty.route';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/academic-semeters', AcademicSemisterRoute);
app.use('/api/v1/academic-faculty', AcademicFacultyRoute);

// Not found handler
app.use((req, res, next) => {
  next(new MyError(404, req.originalUrl + ' not found'));
});

// app.get('/', (req, res) :RequestHandler=> {
//   console.log(x)
// })

// Erorr handler
app.use(GlobalEmailHandleMiddleware);
export default app;
