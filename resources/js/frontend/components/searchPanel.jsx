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
            <div className='col-12 row row-cols-md-3'>
                <div className="col d-flex align-items-stretch position-relative">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Search" />
                        <label for="floatingInputGroup1">Where are you heading?</label>
                    </div>
                    <button class=" me-1 btn d-block rounded-end rounded-0" style={{ background: "var(--main-color)" }}>Search</button>

                </div>


                <div class="col form-floating">
                    <input type="date" class="form-control" id="floatingInput" placeholder="Date d'arrivée" />
                    <label for="floatingInput">Date d'arrivée</label>
                </div>
                <div class="col form-floating ">
                    <input type="date" class="form-control" id="floatingInput" placeholder="Date de départ" />
                    <label for="floatingInput">Date de départ</label>
                </div>
            </div>
        </SearchPanel_>
    )
}
