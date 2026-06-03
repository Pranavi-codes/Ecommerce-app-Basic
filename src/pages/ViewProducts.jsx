import React, { useEffect, useState } from "react";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProductDetails = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);

        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err, "Failed To fetch data");
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <div>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col">
            <div className="card">
              <img src={product.thumbnail} height="250px" width="250px" className="card-image-top" alt="" />
              <div className="card-body">
                <h4 className="card-title">{product.brand}</h4>
                <div className="card-text">
                  {product.description} <br />
                  <h5>Ratings :{product.rating}/5</h5>
                  <h5>Price :{product.price}</h5>

                  <div className="btn btn-success">Buy</div>
                  <div className="btn btn-warning mx-3" >Cart</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
