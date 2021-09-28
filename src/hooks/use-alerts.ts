import alertsService from 'services/alerts.service'

export const useAlerts = (): [(message: string, delay: number) => void, (message: string, delay: number) => void] => {

  const handleSuccess = (message: string, delay: number): void => {
    return alertsService.onSuccess(message, delay);
  }

  const handleError = (message: string, delay: number): void => {
    return alertsService.onError(message, delay);
  }

  return [handleSuccess, handleError];
}
