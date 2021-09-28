import { RouteProps } from 'react-router'

export type GuardFunctionArgs = RouteProps;
export type GuardFunction = (args: GuardFunctionArgs) => boolean;
export type ProtectedRouteProps = RouteProps & {
  guards: GuardFunction[];
  fallback: () => JSX.Element | null;
};
