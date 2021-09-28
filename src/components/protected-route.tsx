import { matchPath } from 'react-router'
import { ProtectedRouteProps } from 'utils/guards/guards'
import { Route } from 'react-router-dom'
import { FC } from 'react'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ fallback, guards, ...rest }) => {
  const { pathname, } = window.location
  const matchResult = matchPath(pathname, rest)
  const hasMatchedRoute = !!matchResult

  if (hasMatchedRoute) {
    const guardArgs = rest
    const canBeRendered = guards.every(guard => guard(guardArgs))
    if (guards.length && !canBeRendered) {
      return fallback()
    }
  }
  return (
    <Route
      {...rest}
    />
  )
}
