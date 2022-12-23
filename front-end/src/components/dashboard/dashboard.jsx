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

                     {/* <div className={style.leftimg}><img className={style.img1} src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536" alt="" /></div> */}

                        
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
                    <img className={style.imgmove} src="https://cdn.smartnordstrom.com/s3/csp/1666988189993/Nordstrom_Homepage_Display_Dyson.jpg" alt="" />
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
             <div className={style.line1}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             <div className={style.sixth_div}>
                <div>
                  <div className={style.move}>
                <p className={style.fifth_Div_text}>The best gifts for everyone you love, all in one place.</p>
                </div>
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


             <div className={style.title}>
               <p className={style.p3}>GIFTS BY RECIPIENT</p>
             </div>

             <div className={style.seventh_div}>
               <div>
                  <div className={style.img_div}>
                     <img src="https://n.nordstrommedia.com/id/0c7312a9-d6ec-4235-bdf4-15b01fc042be.jpeg?h=395&w=1608" alt="" />
                  </div>
                  <div className={style.content_div}>
                     <p className={style.p3}>For Her</p>
                     <p className={style.p3}>For Him</p>
                     <p className={style.p3}>For Kid</p>
                     <p className={style.p3}>For Teen</p>
                     <p className={style.p3}>All Gifts</p>
                  </div>
               </div>
             </div>

             <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             <div className={style.theThread}>
               <p className={style.p3}>THE THREAD</p>
               <p>Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</p>
               <Link to={"#"}><p><u>Get Inspired</u></p></Link>
             </div>
             <div className={style.threadImg_div}>
               <div>
                  <div className={style.threadImg}>
                     <img className={style.imgset} src="https://n.nordstrommedia.com/id/7a88667d-2b47-4e18-9a09-64d6e45cbeff.jpeg?h=516&w=536" alt="" />
                  </div>
                  <div className={style.text_div}>
                  <p className={style.p4}>26 Gift Ideas for the Women in Your Life</p>
                     <p><u>Read More</u></p>
                  </div>
                  
               </div>
               <div>
                  <div className={style.threadImg}>
                     <img className={style.imgset}  src="https://n.nordstrommedia.com/id/8133ea12-7377-4e1c-a8d7-f6e21b4492ad.jpeg?h=516&w=536" alt="" />
                  </div>
                  <div className={style.text_div}>
                  <p className={style.p4}>Buyer's Picks: 11 Unique Gifts from Pop-In@Nordstrom</p>
                     <p><u>Read More</u></p>
                  </div>
                  
               </div>
               <div>
                  <div className={style.threadImg}>
                     <img className={style.imgset}  src="https://n.nordstrommedia.com/id/44ff78f2-0b0e-4da5-8a8a-a09088ff7ca5.jpeg?h=516&w=536" alt="" />
                  </div>
                  <div className={style.text_div}>
                     <p className={style.p4}>The 5 Outerwear Styles to Shop for This Season, According to a Fashion Director</p>
                     <p><u>Read More</u></p>
                </div>
                  </div>
                  </div>

                  <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             <div className={style.title}>
               <p className={style.p3}>SERVICES & EVENTS</p>
             </div>

             <div className={style.serviceImg_div}>
               <div>
                  <div className={style.serviceImg}>
                     <img className={style.serviceimgs} src="https://n.nordstrommedia.com/id/55525828-6ec1-4b50-9792-c556171a7525.jpeg?h=365&w=402" alt="" />
                  </div>
                  <div className={style.servicetext_div}>
                  <p className={style.p4}>The Gift of Choice</p>
                  <p className={style.p5}>Get them what they really want with a Nordstrom Gift Card</p>
                     <p className={style.p5}><u>Gift Cards & eGift Cards</u></p>
                  </div>
                  
               </div>
               <div>
                  <div className={style.serviceImg}>
                     <img className={style.serviceimgs} src="https://n.nordstrommedia.com/id/1eded89e-7279-4606-8944-93e354595e87.jpeg?h=365&w=402" alt="" />
                  </div>
                  <div className={style.servicetext_div}>
                  <p className={style.p4}>Gift Wrapping</p>
                  <p className={style.p5}>We make it easy with festive options. Shop in store or online to see your choices.</p>
                     
                     <p className={style.p5}><u>Learn More</u></p>
                  </div>
                  
               </div>
               <div>
                  <div className={style.serviceImg}>
                     <img className={style.serviceimgs} src="https://n.nordstrommedia.com/id/3f887915-678c-4577-8593-4ac43d234133.jpeg?h=365&w=402" alt="" />
                  </div>
                  <div className={style.servicetext_div}>
                  <p className={style.p4}>Make Memories Together</p>
                  <p className={style.p5}>Festivities are in full swing with events like Santa Greetings, Holiday Breakfasts, Letters to Santa, virtual livestreams and more.</p>
                     <p className={style.p5}><u>Explore Events</u></p>
                  </div>
                  
               </div>
               <div>
                  <div className={style.serviceImg}>
                     <img className={style.serviceimgs} src="https://n.nordstrommedia.com/id/69aae2cc-f5dd-408b-b99b-a20a9bc7c8bc.jpeg?h=365&w=402" alt="" />
                  </div>
                  <div className={style.servicetext_div}>
                  <p className={style.p4}>Free Style Help—in Stores or Online</p>
                  <p className={style.p5}>Get festive fashion advice from our stylists.</p>
                     <p className={style.p5}><u>Learn More</u></p> 
                  </div>
                  
               </div>
               </div>

                  <div className={style.linemove} >
               <div className={style.line}>
                <img src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" alt="" />

             </div>

             </div>



        
        
        
        </div>
        </>
    )
}

export default Dashboard;