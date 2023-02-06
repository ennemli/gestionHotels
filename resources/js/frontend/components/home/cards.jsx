import React from 'react'
import styled from 'styled-components'

const Cards_=styled.div`
display:grid;
grid-template-columns:1fr;
grid-gap:1.2rem;
justify-content:space-around;
@media (min-width:576px){
    grid-template-columns:1fr;    
}
@media (min-width:768px){
    grid-template-columns:repeat(2,1fr);    
}
@media (min-width:992px){
    grid-template-columns:repeat(3,1fr);    
}
@media (min-width:1200px){
    grid-template-columns:repeat(4,1fr);    
}
@media (min-width:1400px){
    grid-template-columns:repeat(5,1fr);    
}

`
export default function Cards({children}) {
  return (
    <Cards_>{children}</Cards_>
  )
}
