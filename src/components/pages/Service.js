import { useParams } from 'react-router-dom'

const Service = (props) => {
    let { id } = useParams()
    const service = props.services.find(service => service.id.toString() === id)
    // if service.id is NOT in the props.services arr then return text saying it doesn't exist
    const idsArr = props.services.map(service => {
        return service.id})
    console.log(idsArr, id, "idssss")
    if(idsArr.includes(parseInt(id))) {
        console.log("true")
    } else {
        console.log("false")
        return <h1>Dont' have that service</h1>
    }
    return (
        <>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
        </>
    )
}
export default Service