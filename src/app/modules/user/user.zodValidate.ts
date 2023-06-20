import z from 'zod';
const UserZodValidator = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role must be needed',
    }),
    adress: z.string({
      required_error: 'Address must be needed',
    }),
  }),
});
export default UserZodValidator;
