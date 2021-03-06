import { useParams } from 'react-router-dom'

const Service = (props) => {
    let { id } = useParams()
    const service = props.services.find(service => service.id.toString() === id)
    if(!service) return <h1>Dont' have that service</h1>
    return (
        <>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
        </>
    )
}
export default Service
