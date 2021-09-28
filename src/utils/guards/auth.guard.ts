import { GuardFunction } from 'utils/guards/guards'

export const AuthGuard: GuardFunction = () => {
  const user = localStorage.getItem('uid');
  return !!user;
};
