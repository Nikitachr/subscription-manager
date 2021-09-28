import { FC } from 'react'
import { IBaseComponent } from 'interfaces/base-component.interface'
import Alert from 'components/alert'
import { useAlertsProvider } from 'hooks/use-alerts-provider'
import { AnimatePresence, motion } from "framer-motion";

const Alerts: FC<IBaseComponent> = () => {
  const [alerts, handleCloseAlert] = useAlertsProvider()

  return (
    <div className='absolute top-8 right-4 flex flex-col gap-2'>
      <AnimatePresence>
        {alerts.map((alert) => (
          <motion.div key={alert.id}
                      layout
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, x: 500, scale: 0.5 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 500, scale: 0.5 }}
          >
            <Alert  alert={alert}
                   onClose={() => handleCloseAlert(alert.id)} />
          </motion.div>
        ))}
      </AnimatePresence>

    </div>
  )
}


export default Alerts
