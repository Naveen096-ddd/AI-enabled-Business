
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email()
});

export const UserForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      <button>Submit</button>
    </form>
  );
};
