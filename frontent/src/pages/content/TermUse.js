import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './content.css';

const TermUse = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Terms & Use</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><Link href="" className='anchor'><i className="fa fa-home"></i> <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link href="" className='anchor'>Term of Uses</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="CricketmasterSection">
                <div className="container">
                    <div className="CustomContainer">
                        <div className="row">
                            <div className="contents-holders">
                                <h3>Terms of Use</h3>
                                <p>
                                    Welcome to Sportskeeda. By visiting our site you are agreeing to be
                                    bound by the following terms and conditions. Please read these terms
                                    and conditions before using, or submitting content in any form or
                                    medium for publication on, sportskeeda.com. We may change these
                                    terms and conditions at any time. Your continued use of
                                    sportskeeda.com implies that you accept any new or modified terms
                                    and conditions that we come up with. Please re-visit the 'Terms of
                                    Use' link at our site from time to time to stay updated with any
                                    changes that we may introduce.
                                </p>
                                <br />
                                <p>
                                    The terms 'sportskeeda.com' and 'Sportskeeda' are used through this
                                    entire Terms of Use document to refer to the website, its owners and
                                    the employees and associates of the owner.
                                </p>
                                <br />
                                <h3>1. REGISTRATION</h3>
                                <p>
                                    You can browse sportskeeda.com without registering for a Sportskeeda
                                    account. In order to post any User Content or access certain
                                    features of the website, however, you must register for an account
                                    with Sportskeeda which may include connecting to sportskeeda.com
                                    through a third-party service and select a password and screen name
                                    "Sportskeeda User ID". You may not select or use as a Sportskeeda
                                    User ID any name that we determine to be offensive, vulgar or
                                    obscene. Sportskeeda reserves the right to refuse registration of,
                                    or cancel a Sportskeeda User ID or a User account at its sole
                                    discretion. By registering, you certify that all information you
                                    provide, now or in the future, is accurate. We reserve the right to
                                    reclaim Sportskeeda User IDs on behalf of businesses or individuals
                                    that hold legal claim or trademark on those usernames. You are
                                    responsible for maintaining the confidentiality of your Sportskeeda
                                    password. By connecting to sportskeeda.com with a third-party
                                    service like Facebook, you give us permission to access and use your
                                    information from that service as permitted by that service, and to
                                    store your log-in credentials for that service.
                                </p>
                                <br />
                                <h3>2. LICENSE</h3>
                                <p>
                                    Sportskeeda hereby grants you a limited, non-exclusive,
                                    non-assignable and non-transferable license to access
                                    sportskeeda.com provided and expressly conditioned upon your
                                    agreement that all such access and use shall be governed by all of
                                    the terms and conditions set forth in this User Agreement.
                                </p>
                                <br />
                                <h3>3. CONTENT</h3>
                                <p>
                                    <b>a.</b> Your content: Sportskeeda allows you to post content on
                                    sportskeeda.com as per our community guidelines, including comments,
                                    pictures, discussion threads and other material. Any content a User
                                    submits, posts, displays, or otherwise makes available on
                                    sportskeeda.com, including all Intellectual Property Rights (defined
                                    below) therein, is referred to as "User Content".
                                </p>
                                <br />
                                <p>
                                    <b>b. How Sportskeeda and other Users can use your content: </b> You
                                    grant us a non-exclusive, perpetual, irrevocable, royalty-free,
                                    transferable, sub-licensable, worldwide license to use, reproduce,
                                    sell, offer to sell, translate, modify, publicly perform, publicly
                                    display, distribute, and make derivative works of your User Content
                                    on sportskeeda.com and in all forms and media now or hereafter known
                                    for the purposes of operating sportskeeda.com. Nothing in this
                                    Agreement shall restrict Sportskeeda's rights under separate
                                    licenses to User Content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TermUse