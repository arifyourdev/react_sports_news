import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

const Find = () => {
    const [tab ,setTab] = useState(1)
    const ToggleTab = (index) =>{
        setTab(index)
     }
     const ActiveTab = (index , className) =>
        tab === index ? className : "";
     
    return (
        <>
            <Helmet>
                <title>Cricfeel | Search</title>
            </Helmet>
            <div className="container">
                <div className="search-close">
                    <a href="" className="close-icon"><i className="fa fa-close"></i></a>
                </div>
                <div className="SearchContainer">
                    <div className="search-header">
                        <div className="search-title">Search Cricfeel</div>
                        <div className="search-box">
                            <input type="text" placeholder="Search" className="search-input" />
                            <span><button className="search-botton" data-bs-toggle="modal" data-bs-target="#searchResults"><i
                                className="fa fa-search"></i></button></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="modal" id="searchResults">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content search-result-content">
                        {/* Modal Header */}
                        <div className="modal-headers search-results-header">
                            <button type="button" data-bs-dismiss="modal">
                                <i className="fa fa-close" />
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="seach-results-body">
                            <div className="search-results-tabs">
                                <ul className="results-tabs">
                                    <li className={`${ActiveTab(1,'active')}`} onClick={()=>ToggleTab(1)}>All Results</li>
                                    <li className={`${ActiveTab(2,'active')}`} onClick={()=>ToggleTab(2)}>Team</li>
                                    <li className={`${ActiveTab(3,'active')}`} onClick={()=>ToggleTab(3)}>Tournament</li>
                                    <li>Sports</li>
                                    <li>Player</li>
                                    <li>Author</li>
                                    <li>Videos</li>
                                </ul>
                                <div className="results-panel-container">
                                    {/* All */}
                                    <div className={`results-panel ${ActiveTab(1,'result-active')}`} id="all_results">
                                        <div className="search-results-show">
                                            {/* Start */}
                                            <div className="about-wrapper-area">
                                                <div className="left-area">
                                                    <span>About 200 results (0.10s)</span>
                                                </div>
                                                <div className="right-area">
                                                    <div className="gsc-orderby">
                                                        <span>Sort By :</span>
                                                    </div>
                                                    <div className="gsc-option-menu-container">
                                                        <div>
                                                            <div className="gsc-option" id="selectBox">
                                                                Relevance
                                                            </div>
                                                            <div className="gsc-option-selector" />
                                                        </div>
                                                        <div className="gsc-option-menu">
                                                            <div className="gsc-option-menu-item gsc-option-menu-item-highlighted">
                                                                <div className="gsc-option">Relevance</div>
                                                            </div>
                                                            <div className="gsc-option-menu-item">
                                                                <div className="gsc-option">Date</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End */}
                                            {/* start */}
                                            <div className="gs-webResult gs-result">
                                                {/* Start */}
                                                <div className="gs-contain-box">
                                                    <div className="gs-title">
                                                        <a href="">
                                                            <b>Salernitana vs Juventus prediction</b> , preview,
                                                            team news and more ...
                                                        </a>
                                                    </div>
                                                    <div className="gs-bidi-start-align">
                                                        Cricfeel.com<span> › Football</span>
                                                        <span> › Serie A 2022-23</span>
                                                    </div>
                                                    <div className="gsc-table-result">
                                                        <img
                                                            src="assets/images/img/a33e8-16644699912286-1920.avif"
                                                            width={70}
                                                            height={70}
                                                            alt=""
                                                        />
                                                        <div className="gsc-content">
                                                            28-Nov-2021 <b>... Salernitana</b> are set to play{" "}
                                                            <b>Juventus</b>
                                                            at the Stadio Arechi on Tuesday for their next Serie A
                                                            fixture.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                                {/* Start */}
                                                <div className="gs-contain-box">
                                                    <div className="gs-title">
                                                        <a href="">
                                                            <b>Salernitana vs Juventus prediction</b> , preview,
                                                            team news and more ...
                                                        </a>
                                                    </div>
                                                    <div className="gs-bidi-start-align">
                                                        Cricfeel.com<span> › Football</span>
                                                        <span> › Serie A 2022-23</span>
                                                    </div>
                                                    <div className="gsc-table-result">
                                                        <img
                                                            src="assets/images/img/a33e8-16644699912286-1920.avif"
                                                            width={70}
                                                            height={70}
                                                            alt=""
                                                        />
                                                        <div className="gsc-content">
                                                            28-Nov-2021 <b>... Salernitana</b> are set to play{" "}
                                                            <b>Juventus</b>
                                                            at the Stadio Arechi on Tuesday for their next Serie A
                                                            fixture.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                            </div>
                                            {/* End */}
                                        </div>
                                    </div>
                                    {/* End All */}
                                    {/* Team */}
                                    <div className={`results-panel ${ActiveTab(2,'result-active')}`} id="all_results">
                                        <div className="search-results-show">
                                            {/* Start */}
                                            <div className="about-wrapper-area">
                                                <div className="left-area">
                                                    <span>About 100 results (0.50s)</span>
                                                </div>
                                                <div className="right-area">
                                                    <div className="gsc-orderby">
                                                        <span>Sort By :</span>
                                                    </div>
                                                    <div className="gsc-option-menu-container">
                                                        <div>
                                                            <div className="gsc-option" id="selectBox">
                                                                Relevance
                                                            </div>
                                                            <div className="gsc-option-selector" />
                                                        </div>
                                                        <div className="gsc-option-menu">
                                                            <div className="gsc-option-menu-item gsc-option-menu-item-highlighted">
                                                                <div className="gsc-option">Relevance</div>
                                                            </div>
                                                            <div className="gsc-option-menu-item">
                                                                <div className="gsc-option">Date</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End */}
                                            {/* start */}
                                            <div className="gs-webResult gs-result">
                                                {/* Start */}
                                                <div className="gs-contain-box">
                                                    <div className="gs-title">
                                                        <a href="">
                                                            <b>Salernitana vs Juventus prediction</b> , preview,
                                                            team news and more ...
                                                        </a>
                                                    </div>
                                                    <div className="gs-bidi-start-align">
                                                        Cricfeel.com<span> › Football</span>
                                                        <span> › Serie A 2022-23</span>
                                                    </div>
                                                    <div className="gsc-table-result">
                                                        <img
                                                            src="assets/images/img/a33e8-16644699912286-1920.avif"
                                                            width={70}
                                                            height={70}
                                                            alt=""
                                                        />
                                                        <div className="gsc-content">
                                                            28-Nov-2021 <b>... Salernitana</b> are set to play{" "}
                                                            <b>Juventus</b>
                                                            at the Stadio Arechi on Tuesday for their next Serie A
                                                            fixture.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                                {/* Start */}
                                                <div className="gs-contain-box">
                                                    <div className="gs-title">
                                                        <a href="">
                                                            <b>Salernitana vs Juventus prediction</b> , preview,
                                                            team news and more ...
                                                        </a>
                                                    </div>
                                                    <div className="gs-bidi-start-align">
                                                        Cricfeel.com<span> › Football</span>
                                                        <span> › Serie A 2022-23</span>
                                                    </div>
                                                    <div className="gsc-table-result">
                                                        <img
                                                            src="assets/images/img/a33e8-16644699912286-1920.avif"
                                                            width={70}
                                                            height={70}
                                                            alt=""
                                                        />
                                                        <div className="gsc-content">
                                                            28-Nov-2021 <b>... Salernitana</b> are set to play{" "}
                                                            <b>Juventus</b>
                                                            at the Stadio Arechi on Tuesday for their next Serie A
                                                            fixture.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                            </div>
                                            {/* End */}
                                        </div>
                                    </div>
                                    {/* End Team */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find