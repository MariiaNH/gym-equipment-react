import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";
import announcements from "../../ASSETS/Announsements";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";

import useAuth from "../../ASSETS/hooks/useAuth";

const AnnouncementBar = () => {

    const [announcementIndex, setAnnouncementIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setAnnouncementIndex(selectedIndex);
    };

    const auth = useAuth();
    const navigate = useNavigate();

    const onLogOut = () => {
        auth.logOut();
        navigate("/login");
    };

    return (
        <section class="announcementBar">
            <div className="container">
                <div className="announcementBar__content">
                    <Carousel className="announcementsCarousel" activeIndex={announcementIndex} onSelect={handleSelect}>
                        {
                            announcements.map(announcement => (
                                <Carousel.Item className="announcement-item" interval={300000}>
                                    <p className="announcement-text">{announcement.text}</p>
                                    <a href={announcement.link} className="announcement-link">
                                        <p className="announcement-link-text">{announcement.url_text}</p>
                                    </a>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                    <div className="customerActions">
                        {auth.isLoaded &&
                            (auth.user ? (
                                <>
                                    <Link className="link" to="/profile">
                                        <button className=" button customerActions__button customerActions__button-profile">
                                            {auth.user.firstName} {auth.user.lastName}
                                        </button>
                                    </Link>

                                    <button className="button customerActions__button customerActions__button-logOut" onClick={onLogOut}>
                                        Log Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link className="link" to="/login">
                                        <button className=" button customerActions__button customerActions__button-login">
                                            Log In
                                        </button>
                                    </Link>
                                    <Link className="link" to="/registration">
                                        <button className="button customerActions__button customerActions__button-signUp">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnnouncementBar;
