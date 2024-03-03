import React from 'react';
import ContactList from '../components/ContactList';
import '../styles/Home.css';
import myAvatar from '../assets/';

const Home = () => {
    return (
        <div>
            <div className="container align-container mb-4">
                <h1 id="name" className="my-4">
                    Welcome to Mr. Spock's Portfolio Page
                </h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img
                            className="spock-headshot img-fluid mx-auto d-block"
                            src={spockHeadShot}
                            alt="Afro Spock"
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="bio-text mt-5 p-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum, assumenda soluta fugiat rem repellat veritatis corporis sed ea voluptatem maiores possimus impedit exercitationem neque asperiores, illum porro tenetur mollitia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactList />
        </div>
    );
};

export default Home;