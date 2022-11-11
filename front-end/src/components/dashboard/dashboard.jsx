import style from "./dashboard.module.css";
import React from "react";
import {Link} from "react-router-dom";


const Dashboard = () => {

    return (
        <>
        <div className={style.fst_div}>

            <div className={style.fst_div_start} >
                <div className={style.imgdiv}>
                     
                     <div className={style.righttimg}><img  className={style.img1} src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536" alt="" /></div>
                     <div className={style.middlediv}>
                        <p className={style.p1}>Shop what you love—faster and easier.</p>
                        <Link to={"#"}><p className={style.p2}><u>Sign In or Create an Account</u></p></Link>
                     </div>
                     <div className={style.leftimg}><img className={style.img1} src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536" alt="" /></div>
                        
                </div>
             </div>

             <div className={style.secondDiv}>

                <div className={style.save70}>
                <p className={style.p2}>Save up to 70% on selected items—exclusions apply. Ends Monday!</p>
                </div>
                <div className={style.link}>

                    <Link to={"#"}><p className={style.p2}><u>New Markdowns</u> </p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Women's Sale </u></p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Men's Sale  </u></p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Kids' Sale</u> </p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Home Sale </u> </p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Beauty & Fragrance Sale </u></p></Link>
                    <Link to={"#"}><p className={style.p2}><u>Exclusions & Restrictions</u> </p></Link>
                </div>

                {/* <img src="https://n.nordstrommedia.com/id/86cb85ca-559d-45c7-b276-7945fa02d93c.png?h=400&w=1608" alt="" /> */}
             </div>


             <div className={style.thirdDiv}>
                <div>
                    <img src="https://cdn.smartnordstrom.com/s3/csp/1666988189993/Nordstrom_Homepage_Display_Dyson.jpg" alt="" />
                </div>
                <div className={style.blackbackground}>
                    <p className={style.p1}>Gift with Style</p>
                    <p className={style.p2}>The special-edition Dyson Supersonic™ hair dryer is here!</p>
                    <Link to={"#"}><p className={style.p2}><u>Shop Now</u></p></Link>

                </div>
             </div>

             <div className={style.fourth_div}>
                <div>
                    <p className={style.p3}>Deals You’ll Love</p>
                </div>
                <div className={style.viewProducts}><Link to={"#"}><button><p className={style.p2}>View All Women</p></button></Link></div>


             </div>
        
        
        
        </div>
        </>
    )
}

export default Dashboard;