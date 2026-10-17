import styles from './Register.module.css';

import CustomLabel from '../components/CustomLabel';

import { useId } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { registerFields, type RegisterFormValues } from './Register.config';

const Register = () => {
  const registerId = useId();
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log({
      ...data
    })
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => { void handleSubmit(onSubmit)(e); }}>
      {registerFields.map(({ title, placeholder, type, autoComplete, name }) => {
        const id = `${registerId}-${name}`;

        return (
          <CustomLabel key={name} title={title} htmlFor={id}>
            <input
              {...register(name)}
              className={styles.input}
              id={id}
              type={type}
              autoComplete={autoComplete}
              placeholder={placeholder}
              minLength={type === 'password' ? 6 : undefined}
              maxLength={type === 'password' ? 32 : undefined}
              required
            />
          </CustomLabel>
        );
      })}

      <button className={styles.button} type="submit">
        Create account
      </button>
    </form>
  );
};

export default Register;
