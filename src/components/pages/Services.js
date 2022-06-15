import { Link } from 'react-router-dom'

const Services = (props) => {
    const servicesArr = props.servicesArr.map((service, i) => {
        return <li key={`service-${i}`}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
        </li>
    })
	return (
		<>
			<h2>Services</h2>
            <ol>
                {servicesArr}
            </ol>
		</>
	)
}
export default Services
