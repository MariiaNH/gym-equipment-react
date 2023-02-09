import {Link} from "react-router-dom";


const MainBanner = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(./IMAGES/mainBannerbackground.svg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };

    return (
        <>
            <div className="mainBanner mainBanner-desktop">
                <div className="mainBanner-background" style={backgroundImageStyle}>
                    <img className="mainBanner-image" src={'./IMAGES/man.svg'}/>
                    <div className="mainBanner-content">
                        <h1 className=" mainBanner-text mainBanner-text--regular">
                            become a member of
                        </h1>
                        <h1 className=" mainBanner-text mainBanner-text--accent">vitalclub</h1>
                        <Link className="mainBanner-link" to={'/registration'}>
                            <div className="mainBanner-button button button-primary">join free</div>
                        </Link>

                    </div>


                </div>
            </div>

            <div className="mainBanner-mobile">

            </div>
        </>
    )
};

export default MainBanner;
