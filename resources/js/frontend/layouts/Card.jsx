import React from 'react'
import { getRates } from '../utils/cards'

export default function Card({imgUrl,title,body,price,rate}) {
    const rateArr=getRates(rate)
    console.log(rateArr)
  return (
<div class="card mb-3">
  <img src={imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{body}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <div>
        {rateArr.map((cls,i)=><i class={`bi ${cls}`} style={{color:"var(--secondary-color)"}} key={i}></i>)}
    </div>
  </div>
</div>
    )
}
