import style from "./dashboard.module.css";
import React from "react";
import {Link} from "react-router-dom";
import Index from "./Carosal/Index";
import Index2 from "./Carosal2/Index2";
import AutoCarosal from "./AutoPlayCarosal/AutoPlayCarosal";


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
                     <div className={style.leftimg}><img className={style.img1} src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536" alt="" /></div>
                        
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

             {/* carosalNavbar */}

             <div className={style.fourth_div}>
                <div>
                    <p className={style.p3}>Deals You’ll Love</p>
                </div>
                <div className={style.viewProducts}><Link to={"#"}><button><p className={style.p2}>View All Women</p></button></Link></div>


             </div>

             {/* carosalNavbar */}

             <div className={style.carosalNavbar}>

               <Link to={"#"} ><p>Women</p></Link> 
                <p>Men</p>
                <p>Designer</p>
                <p>Kid's</p>
                <p>Beauty</p>
                <p>Home</p>
             </div>
             <hr/>
             <div className={style.carosal}>
                <Index/>
             </div>

             <div className={style.fifth_Div}>

                <div>

                <p className={style.fifth_Div_text}><b>Earn 3X the points!</b> Ends November 13.</p>
                <p>Shop gifts for them—earn triple points for you!</p>
                <div className={style.fifth_Div_text_two}>
                    <p>Gifts :</p>
                <Link><p><u>For Her</u></p></Link>
                <Link><p><u>For Him</u></p></Link>
                <Link><p><u>For Kid's</u></p></Link>
                <Link><p><u>For Teen</u></p></Link>
                <Link><p><u>See Restrictions</u></p></Link>
                

                </div>
                </div>

             </div>
             <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             <div className={style.sixth_div}>
                <div>
                <p className={style.fifth_Div_text}>The best gifts for everyone you love, all in one place.</p>
                <div className={style.buttons}>
                    <button>Shop Gifts</button>
                    <button>Explore Our Gifts Guides</button>
                    <button>Shop Holiday Dressing</button>
                </div>
                </div>
             </div>
             <div className={style.AutoCarosal}>
                <AutoCarosal/>
             </div>

             <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             {/* carosalNavbar */}

             <div className={style.fourth_div}>
                <div>
                    <p className={style.p3}>Gifts by Recipient</p>
                </div>
                <div className={style.viewProducts}><Link to={"#"}><button><p className={style.p2}>View All Gift's For Her</p></button></Link></div>


             </div>

             {/* carosalNavbar */}

             <div className={style.carosalNavbar}>

               
                <p>Gifts for Her</p>
                <p>Gifts for Him</p>
                <p>Gifts for Kid's</p>
                <p>Gifts for Teens</p>
                <p>Gifts for Everyone</p>
             </div>
             <hr/>
             <div className={style.carosal}>
                <Index2/>
             </div>

             <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>
        
        
        
        </div>
        </>
    )
}

export default Dashboard;