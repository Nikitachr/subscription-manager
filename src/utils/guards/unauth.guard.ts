import { GuardFunction } from 'utils/guards/guards'

export const UnauthGuard: GuardFunction = () => {
  const user = localStorage.getItem('uid');
  return !user;
};
