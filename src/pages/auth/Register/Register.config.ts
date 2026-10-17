export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface RegisterField {
  name: keyof RegisterFormValues;
  title: string;
  type: 'text' | 'email' | 'password';
  autoComplete: 'username' | 'email' | 'new-password';
  placeholder: string;
}

export const registerFields = [
  {
    name: 'username',
    title: 'Username',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'Choose a username',
  },
  {
    name: 'email',
    title: 'Email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    title: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Create a password',
  },
  {
    name: 'repeatPassword',
    title: 'Repeat password',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Repeat your password',
  },
] satisfies RegisterField[];
