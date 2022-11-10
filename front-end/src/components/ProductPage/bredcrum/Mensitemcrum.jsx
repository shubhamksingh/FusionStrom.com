import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Mensitemcrum = () => {
  return (
    <div>
      <Breadcrumb separator=" ">
        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="Alltshirt.jsx">All T-Shirt</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="Crewneck.jsx">Crewneck</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink className="br" href="#g">Graphic Tees</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink  className="br" href="#">Henley</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink className="br" href="#">Oversized</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink className="br" href="#">V-Neck</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Mensitemcrum;
