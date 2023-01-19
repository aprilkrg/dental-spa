import { useParams } from 'react-router-dom'

import Services from './Services'
import serviceDetails from '../../data/serviceDetails'

const Service = (props) => {
    let { id }  = useParams()
    // console.log(typeof id, "ID")
    const service = props.services.find(service => service.id === parseInt(id))
    // console.log(service, "<<<<<<<<")
    if (!service) return <h3>We don't offer that service.</h3>
    return(
        <>
            <Services services={serviceDetails}/>
            <h3>{service.name}</h3>
            <p>${service.price}</p>
            <p>{service.description}</p>
        </>
    )
}
export default Service