import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Mensitemcrum = () => {
  return (
    <div>
      <Breadcrumb separator=" ">
        <BreadcrumbItem>
          {/* <BreadcrumbLink className="br" href="#">All T-Shirt</BreadcrumbLink> */}
          <Link className="br">All T-Shirt</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          {/* <BreadcrumbLink className="br" href="#">Crewneck</BreadcrumbLink> */}
          <Link className="br" to="#">Crewneck</Link>
        </BreadcrumbItem>

        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">Graphic Tees</BreadcrumbLink> */}
          <Link className="br">Graphic Tees</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink  className="br" href="#">Henley</BreadcrumbLink> */}
          <Link className="br">Henley</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">Oversized</BreadcrumbLink> */}
          <Link className="br">Oversized</Link>
        </BreadcrumbItem>
        <BreadcrumbItem >
          {/* <BreadcrumbLink className="br" href="#">V-Neck</BreadcrumbLink> */}
          <Link className="br">V-Neck</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Mensitemcrum;
