import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to <b>SophyCart</b>, your one-stop destination for an exceptional online shopping experience. Founded with a passion for providing high-quality products and unparalleled customer service, we strive to bring the best of the market directly to your doorstep. Our e-commerce platform is designed to cater to all your shopping needs, offering a wide range of products across various categories including fashion, electronics, home decor, beauty, and more.

At <b>SophyCart</b>, we believe in the power of choice. Our extensive collection is carefully curated to ensure that you have access to the latest trends and timeless classics. We collaborate with top brands and trusted suppliers to bring you products that are not only stylish but also durable and reliable. Each item on our platform is selected with the utmost care, keeping in mind the diverse tastes and preferences of our valued customers.

Customer satisfaction is at the heart of everything we do. Our user-friendly website is designed to provide a seamless shopping experience, with easy navigation, detailed product descriptions, and high-quality images to help you make informed decisions. We understand the importance of convenience, which is why we offer multiple payment options, secure transactions, and swift delivery services to ensure your purchases reach you in perfect condition and on time.

Our dedicated customer support team is always ready to assist you with any queries or concerns. Whether you need help with placing an order, tracking your shipment, or processing a return, we are here to ensure a smooth and satisfying shopping experience.

Join the SophyCart family today and discover a world of quality products and exceptional service. We are committed to making your online shopping journey enjoyable and rewarding. Thank you for choosing SophyCart – where your satisfaction is our priority.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage