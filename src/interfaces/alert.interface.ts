export interface IAlert {
  id: string;
  message: string;
  delay: number;
  type: 'ERROR' | 'SUCCESS' | 'WARNING'
}
