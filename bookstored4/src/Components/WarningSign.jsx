import { Alert } from 'react-bootstrap'

const AlertMessage = (props) => (
<Alert variant="danger">
    {props.text}
  </Alert>
  )

export default AlertMessage;