import {Link} from "react-router-dom";

const NotFound = () => {

    const notFoundStyle = {
        backgroundImage: `url(/IMAGES/404Background.svg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };
    return (
        <section className="notFound" style={notFoundStyle}>
            <div className="container">
                <div className="notFound__content">
                    <h1 className="notFound__title notFound__title-main">OOPS!</h1>
                    <h3 className="notFound__title notFound__title-subtitle">404 – PAGE NOT FOUND</h3>
                    <p className="notFound__text">
                        It looks like the link you are trying to reach is broken or has been moved. Our technical team have been notified and will take a look to see whats going on.
                    </p>

                    <Link className='link' to={'/shop'}>
                        <button className='button button-primary notFound__button'> Go to shop</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
