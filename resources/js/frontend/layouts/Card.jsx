import React from 'react'

export default function Card({imgUrl,title,body,price,rate}) {
  return (
<div class="card mb-3">
  <img src={imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{body}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    )
}
