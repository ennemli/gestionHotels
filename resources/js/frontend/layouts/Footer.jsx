import * as React from "react";

export default function Footer() {
  return (
      <footer style={{backgroundColor: "var(--main-color)"}} className="text-white text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row mt-4">
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
              <h5 style={{color:'var(--secondary-color)'}} className="text-uppercase mb-4">About Us</h5>
              <p>
              we are team for help you to found 
              a hotel in the place you want with 
              the specification you want and that 
              it's very fast and confidence 
              </p>
              <a style={{textDecoration:'none'}} className='text-warning' href="#learn">learn more about us...</a>
    
            </div>
            {/* <!--Grid column--> */}
    
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
              <h5 style={{color:'var(--secondary-color)'}} className="text-uppercase mb-4 pb-1">contact us</h5>
    
              <div className="mt-4">
                {/* <!-- Facebook --> */}
                <a type="button" className="btn btn-floating btn-light btn-lg rounded-5"><i className="fab fa-facebook-f"></i></a>
                {/* <!-- Dribbble --> */}
                <a type="button" className="btn btn-floating btn-light btn-lg rounded-5 ml-1"><i className="fab fa-whatsapp"></i></a>
                {/* <!-- Twitter --> */}
                <a type="button" className="btn btn-floating btn-light btn-lg rounded-5 ml-1"><i className="fab fa-linkedin"></i></a>
                {/* <!-- Google + --> */}
                <a type="button" className="btn btn-floating btn-light btn-lg rounded-5 ml-1"><i className="fab fa-instagram"></i></a>
                {/* <!-- Linkedin --> */}
              </div>
              <p><i className="fab fa-facebook mt-3"></i> +212 585958443</p>
              <p><i className="fab fa-whatsapp"></i>+212 634747348</p>
            </div>
            {/* <!--Grid column--> */}
    
            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
              <h5 style={{color:'var(--secondary-color)'}} className="text-uppercase mb-4">Aide</h5>
    
              <p>droit de payment</p>
              <p>annuler mon reservation</p>
              <p>récupérer mon argent</p>
              <a style={{textDecoration:'none'}} className='text-warning' href="#learn">regarder autres ...</a>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}
    
        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{backgroundColor: "var(--mains-color)"}}>
          © 2023 Copyright:
          <a style={{textDecoration:'none'}} className="text-white" href="https://mdbootstrap.com/">HetelStar.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    
  );
}