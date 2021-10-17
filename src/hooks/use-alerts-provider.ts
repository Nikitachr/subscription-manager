import { useEffect, useState } from 'react'
import { Observable, Subscription } from 'rxjs'

import { IAlert } from 'interfaces/alert.interface'
import alertsService from 'services/alerts.service'

function onEmit<T>(source$:Observable<T>, nextFn:(value: T) => void): Subscription {
  return source$.subscribe(nextFn, console.error);
}

export const useAlertsProvider = (): [IAlert[], (id: string) => void] => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const handleAddAlert = (alert: IAlert): void => {
    setAlerts(prevAlerts => [alert, ...prevAlerts]);
  }

  const handleCloseAlert = (id: string): void => {
    setAlerts(prevAlerts => prevAlerts.filter(el => el.id !== id));
  }

  useEffect(() => {
    const alerts$ = onEmit<IAlert>(alertsService.getAlerts(), handleAddAlert);
    return () => alerts$.unsubscribe();
  }, [])

  return [alerts, handleCloseAlert];
}
