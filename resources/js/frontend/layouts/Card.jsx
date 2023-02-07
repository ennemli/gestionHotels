import React from 'react'
import { getRates } from '../utils/cards'

export default function Card({imgUrl,title,body,price,rate}) {
    const rateArr=getRates(rate)
  return (
<div className="card mb-3">
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>    
  </div>
  <div className='card-footer'>
  <div className='d-flex justify-content-between align-items-center'>
    <div>
        {rateArr.map((cls,i)=><i className={`bi ${cls}`} style={{color:"var(--secondary-color)"}} key={i}></i>)}

    </div>
    <mark className='fw-bold' style={{color:"var(--main-color)"}}>{price} MAD/Night</mark>
    </div>
    <a className='btn btn-outline-success w-100 my-2 text-dark fw-bold'>Check availability</a>
  </div>
</div>
    )
}
