import React from "react";
import "../ProductPage/product-page.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const Mensbredcrum = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="br" href="#">Mens</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink  className="br" href="#">Clothing</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="br"  href="#">T-Shirt</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Mensbredcrum;
