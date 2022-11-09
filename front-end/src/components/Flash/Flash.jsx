// import { colors } from '@mui/material'
import React from "react";

import { useSelector } from "react-redux";
import styles from "./Flash.module.css";
import womensdata from "./Data/womensdata.json";
import { Link, useNavigate } from "react-router-dom";

const Flash = () => {
  const Data = womensdata.womensData;
  //const data = useSelector((state) => state.Data.data)

  const filterData = Data.filter((item) => {
    return item.title.includes("a");
  });

  console.log("filter data", filterData, filterData.length);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.left}>
        <a> Home /</a>
        <a>styles Events/ </a>
        <Link to={`flash/women`}>Women's styles Events </Link>
      </div>
      <div className={styles.topdiv}>
        <div className={styles.sidebar}>
          <h3>Flash Events</h3>
          <Link to="/flash/women">Women's styles Events </Link>
          <Link to="/flash/mens">Men's styles Events</Link>
          <Link to="/flash/kids">kid's styles Events </Link>
          <Link to="/flash/home">Home styles Events </Link>
          <Link to="/flash/beauty">Beauty styles Events </Link>
          <h3>Featured</h3>
          <a>Women's Must-Have Bright & Bold Sandals</a>
          <a>Men's Must-Have Sandals Up to 60% Off </a>
          <a>Kid's Must-Have Sandals Up To 50% Off</a>
          <a>Free People Starting at $30</a>
          <a>Alexa Admor Up to 65% Off including Plus</a>
          <a>Beach Party:Women's Swimwear,Cover-Ups & More Up to 60% Off</a>
          <a>beach Party:Women's Summer & Resort Styles Up to 65% Off</a>
          <a>Beach Party:Men's Summer & Resort Styles Up to 65% Off</a>
          <a>Beach Party:Kid's Swim & Summer Styles Up to 60% Off</a>
          <a>Cozy Throws Feat.Barefoot Dreams</a>
        </div>

        <div className={styles.women}>
          <h2>Women's styles Events</h2>
          <img
            className={styles.image}
            src="https://n.nordstrommedia.com/id/cc3b28d5-08ef-440d-b791-1e46d7ab48a1.png?h=185&w=1560"
            alt=""
          />
          <h3>Today's Event</h3>

          <div className={styles.sk}>
            {Data.map((e) => {
              return (
                <>
                  <div>
                    <div>
                      <img src={e.imgurl} />
                    </div>
                    <div className={styles.titl}>
                      <p className={styles.bold}>{e.title}</p>
                      <p className={styles.normal}>{e.para}</p>
                    </div>
                    {/* <p>{e.price.raw}</p> */}
                    {/* <p>{e.condition}</p> */}
                    {/* <p className={styles.price}>{e.price.raw}</p> */}
                    {/* <p>{e.price.extracted}</p> */}
                    {/* <p>{e.price.from.raw}</p> */}
                    {/* <p className={styles.shipping}>{e.shipping}</p> */}
                    {/* <p className={styles.sold}>{e.extensions}</p> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flash;
