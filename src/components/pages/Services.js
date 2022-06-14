const Services = (props) => {
    const servicesArr = props.services.map((service, i) => {
        return <li key={`service-${i}`}>{service}</li>
    })
    return (
        <>
            <h2>Services Page</h2>
            <ol>
              {servicesArr}
            </ol>
        </>
    )
}
export default Services