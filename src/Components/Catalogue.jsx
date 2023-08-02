import React from 'react';
import web from '../Images/img1.jpg';
import vector9 from '../Images/Vector 9.png';
import Rectangle36 from '../Images/Rectangle 36.png';
import Rectangle44 from '../Images/Rectangle 44.png';
import Rectangle38 from '../Images/Rectangle 38.png';
import Rectangle45 from '../Images/Rectangle 45.png';
import Rectangle43 from '../Images/Rectangle 43.png';
import Rectangle41 from '../Images/Rectangle 41.png';
import Card from './Card';
import Cdata from './Cdata';
import image12 from '../Images/image 12.png';
import Rcard from './Rcard';
import Rdata from './Rdata';
import Mobileapp from '../Images/Mobile app.png';
import Rectangle18 from '../Images/Rectangle 18.png';
import Rectangle55 from '../Images/Rectangle 55.png';

const Catalogue = ()=>{

  return (
    <>
      <div  className='container-fluid mt-5'>
        <div className='container bg-light banner pb-5'>
            <div className='row'>
              <div className='col-md-6 mt-5'>
                <div className='ps-5'>
                  <h1 className='banner_bg p-5'>
                      <p className='banner_bg1'>LET’S</p>
                      <p>EXPLORE</p>
                      <p className='banner_bg2'>UNIQUE</p>
                      <p>CLOTHES.</p>
                  </h1>
                  <p className='ps-5'>Live for Influential and Innovative fashion!</p>
                  <div className='ps-5'>
                   <img className='img-fluid' src={vector9} /> <button className='btn btn-dark'>Shop Now</button>
                  </div>
                </div>
              </div>
              <div className='col-md-6 pt-5 banner_image'>
                <div className='pt-5'>
                  <img src={web} className='img-fluid' alt='bg-img'/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='container-fluid mt-5 brands_logo'>
          <div className='container py-4'>
            <div className='row'>
              <div className='col-2'><img src={Rectangle36} className='img-fluid'/></div>
              <div className='col-2'><img src={Rectangle44} className='img-fluid'/></div>
              <div className='col-2'><img src={Rectangle38} className='img-fluid'/></div>
              <div className='col-2'><img src={Rectangle45} className='img-fluid'/></div>
              <div className='col-2'><img src={Rectangle43} className='img-fluid'/></div>
              <div className='col-2'><img src={Rectangle41} className='img-fluid'/></div>
            </div>
          </div>
      </div>
      <div className='container-fluid mt-5'>
          <div className='container'>
              <h1>NEW ARRIVALS</h1>
              <div className='container mt-5'>
                <div className='row gy-4'>
                      {
                        Cdata.map( (Cval, ind )=>{
                          return <Card src= {Cval.src} title={Cval.title} />
                        })
                      }
                  </div>
              </div>
          </div>
      </div>
      <div className='container-fluid banner2_bg mt-5'>
        <div className='row'>
              <div className='col-md-6'>
                  <img src={image12} className='img-fluid'/>
              </div>
              <div className='col-md-6'>
                  <div className='pt-5'>
                    <h1 className='banner2_bg1 p-5'>
                      <p className='banner2_bg2'>PAYDAY</p>
                      <p>SALE NOW</p>
                    </h1>
                    <h4 className='ps-5'>
                      Spend minimal $100 get 30% off <br/>
                      voucher code for your next purchase
                    </h4>
                    <h3 className='ps-5 mt-5'>
                      <b>1 June - 10 June 2021</b>
                      <p>*Terms & Conditions apply</p> 
                    </h3>
                    <button className='btn btn-lg btn-dark text-white ms-5 mt-5'>SHOP NOW</button>
                  </div>
              </div>
        </div>
      </div>
      <div className='container-fluid mt-5'>
          <div className='container mt-5'>
               <h1>Young’s Favourite</h1> 
               <div className='container mt-5'>
                  <div className='row gy-4'>
                    {
                      Rdata.map( (Cval, ind )=>{
                        return <Rcard src= {Cval.src} title={Cval.title}/>
                      })
                    }
                  </div>    
               </div>
          </div>
      </div>
      <div className='container-fluid my-5'>
          <div className='container'>
                <div className='row'>
                    <div className='col-10  mx-auto'>
                      <div className='container'>
                        <div className='row gy-3'>
                           <div className='col-md-6 mt-5'>
                              <div className='d-flex align-items-center flex-column mt-5'>
                                  <h1 className='mt-5'>DOWNLOAD APP & <br/>GET THE VOUCHER!</h1><br/>
                                  <p>Get 30% off for first transaction using<br/>
                                    Rondovision mobile app for now.</p>
                                  <div className='col-sm-12'>
                                      <button className='btn btn-sm'><img src={Rectangle55} className='img-fluid'/></button><button className='btn btn-sm'><img src={Rectangle18} className='img-fluid'/></button>  
                                  </div>
                                </div>  
                           </div>
                           <div className='col-md-6'>
                            <img src={Mobileapp} className='img-fluid banner_image2' alt='bg_image'  />
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
      </div>
      <div className='container-fluid py-5 banner3_bg'>
            <div className='container text-center text-white my-5 '>
                  <h1>JOIN SHOPPING COMMUNITY TO<br/> GET MONTHLY PROMO</h1>
                  <p className=''>Type your email down below and be young wild generation</p>
            </div>
      </div>
      <div className='container-fluid py-5 footer_bg'>
                    
      </div>
    </>
  )
}

export default Catalogue;