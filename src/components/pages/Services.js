import {Link} from 'react-router-dom'

const Services = (props) => {
    const servicesArr = props.services.map((service, i) => {
        return <li>
            <Link to={`/services/${service.id}`} key={`service-${i}`}>{service.name}</Link>
        </li>
    })

    return (
        <>
            <h2>Services Page</h2>
            {servicesArr}
        </>
    )
}
export default Services