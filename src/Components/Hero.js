import React from 'react'

function Hero() {
   
  return (
   <section className="hero-area bg-1 text-center overly">
   {/* Container Start */}
   <div className="container">
     <div className="row">
       <div className="col-md-12">
         {/* Header Contetnt */}
         <div className="content-block">
           <h1>Buy &amp; Sell Near You </h1>
           <p>Join the millions who buy and sell from each other <br /> everyday in local communities around the world</p>
           <div className="short-popular-category-list text-center">
             <h2>Popular Category</h2>
             <ul className="list-inline">
               <li className="list-inline-item">
                 <a href><i className="fa fa-bed" /> Hotel</a></li>
               <li className="list-inline-item">
                 <a href><i className="fa fa-grav" /> Fitness</a>
               </li>
               <li className="list-inline-item">
                 <a href><i className="fa fa-car" /> Cars</a>
               </li>
               <li className="list-inline-item">
                 <a href><i className="fa fa-cutlery" /> Restaurants</a>
               </li>
               <li className="list-inline-item">
                 <a href><i className="fa fa-coffee" /> Cafe</a>
               </li>
             </ul>
           </div>
         </div>
         {/* Advance Search */}
         <div className="advance-search">
           <form action="#">
             <div className="row">
               {/* Store Search */}
               <div className="col-lg-6 col-md-12">
                 <div className="block d-flex">
                   <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store" />
                 </div>
               </div>
               <div className="col-lg-6 col-md-12">
                 <div className="block d-flex">
                   <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store" />
                   {/* Search Button */}
                   <button className="btn btn-main">SEARCH</button>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
   {/* Container End */}
 </section>
      
            )

  
}

export default Hero