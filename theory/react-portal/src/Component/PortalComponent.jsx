
import  ReactDOM  from 'react-dom';
const PortalComponent = () => {
    return ReactDOM.createPortal(<h2>This is Portal Component </h2>,document.getElementById("root-portal"))
}
export default PortalComponent