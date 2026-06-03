import Carousel from "react-bootstrap/Carousel";

function IndividualIntervals() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="carousel-image"
          src="https://www.intellectoutsource.com/blog/images/importance-of-product-images-in-ecommerce-business-stores.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Smart Shopping</h3>
          <p>Discover amazing products at great prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="carousel-image"
          src="https://www.shutterstock.com/image-vector/modern-vector-illustration-showing-small-260nw-2642792833.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Latest Trends</h3>
          <p>Explore modern collections and exclusive offers.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="carousel-image"
          src="https://static.vecteezy.com/system/resources/previews/041/944/236/non_2x/online-store-payment-mobile-shopping-pay-purchase-order-and-credit-card-payments-from-smartphone-illustration-set-digital-technology-mobile-marketing-buying-goods-via-internet-app-vector.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Secure Payments</h3>
          <p>Fast, easy and secure online shopping experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervals;