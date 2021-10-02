import { Observable, Subject } from 'rxjs'
import { IAlert } from 'interfaces/alert.interface'
import { v4 as uuidv4 } from 'uuid';

class AlertsService {
  private alerts$$ = new Subject<IAlert>();

  public getAlerts(): Observable<IAlert> {
    return this.alerts$$.asObservable();
  }

  public onSuccess(message: string, delay: number): void {
    this.alerts$$.next({ type: 'SUCCESS', delay, message, id: uuidv4() })
  }

  public onError(message: string, delay: number): void {
    this.alerts$$.next({ type: 'ERROR', delay, message, id: uuidv4() })
  }
}

const alertsService = new AlertsService();

export default alertsService;
