import React from 'react'
import "../../ProductPage/product-page.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Womensbredcrum = () => {
  return (
    <div>
         <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="#">Women</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink  className="br" href="#">Clothing</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="br"  href="#">ALL</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      
    </div>
  )
}

export default Womensbredcrum
