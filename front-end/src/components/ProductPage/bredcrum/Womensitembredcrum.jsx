import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Womensitembredcrum = () => {
  return (
    <div>
        <Breadcrumb separator=" ">
        <BreadcrumbItem>
          {/* <BreadcrumbLink className="br" href="#">All T-Shirt</BreadcrumbLink> */}
          <Link className="br">All Tops</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          {/* <BreadcrumbLink className="br" href="#">Crewneck</BreadcrumbLink> */}
          <Link className="br" to="#">New Arrivals</Link>
        </BreadcrumbItem>

        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">Graphic Tees</BreadcrumbLink> */}
          <Link className="br">Blouses</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink  className="br" href="#">Henley</BreadcrumbLink> */}
          <Link className="br">Bodysuits</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">Oversized</BreadcrumbLink> */}
          <Link className="br">Button Up</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">V-Neck</BreadcrumbLink> */}
          <Link className="br">Graphic Tees</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      
    </div>
  )
}

export default Womensitembredcrum
