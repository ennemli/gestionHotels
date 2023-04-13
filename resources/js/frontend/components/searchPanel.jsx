import React from 'react'
import styled from 'styled-components'
const SearchPanel_ = styled.div`
box-shadow:0px 0px 2px 4px var(--secondary-color);
border-radius:5px;
z-index: 100;
position: absolute;
width: 75%;
left: 12.5%;
bottom: -5%;
padding:1.2rem;
background:#FFFFFF;
`
export default function SearchPanel() {
    return (
        <SearchPanel_ className='row'>
            <div className='col-12 row row-cols-lg-3'>
                <div className="col col-md-12 d-flex align-items-stretch position-relative">
                    <div className="form-floating w-100">
                        <input type="text" className="form-control " id="floatingInputGroup1" placeholder="Search" />
                        <label htmlFor="floatingInputGroup1">Where are you heading?</label>
                    </div>
                    <button className=" me-1 btn d-block rounded-end rounded-0" style={{ background: "var(--main-color)" }}>Search</button>

                </div>


                <div className="col col-md-6 col-sm-12 col-xs-12 form-floating">
                    <input type="date" className="form-control" id="floatingInput" placeholder="Date d'arrivée" />
                    <label htmlFor="floatingInput">Date d'arrivée</label>
                </div>
                <div className="col col-md-6 col-sm-12 col-xs-12 form-floating ">
                    <input type="date" className="form-control" id="floatingInput" placeholder="Date de départ" />
                    <label htmlFor="floatingInput">Date de départ</label>
                </div>
            </div>
        </SearchPanel_>
    )
}
