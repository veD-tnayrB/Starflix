import Route from './Route';


export default
function Card({ info }) {
    const { title, routes } = info;

    const routesItems = routes.map(route => (
        <Route 
         key={route.link}
         {...route}
        />
    ))

    return (
        <div className="page-information">
            <h4>{title}</h4>
            <ul>
                {routesItems}
            </ul>
        </div>
    )
}