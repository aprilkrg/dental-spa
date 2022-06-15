import {useParams} from 'react-router-dom'

const Service = (props) => {
    let {id} = useParams()
    const service = props.services.find(service => service.id.toString() === id)
    return (
        <div key={`service-${service.id}`}>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
        </div>
    )
}
export default Service