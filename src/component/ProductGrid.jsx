import './ProductTable.css'
import React from 'react';
const ProductCard = ({imageUrl, category }) => {

  return (
    <>
    <div className="col-md-4 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={imageUrl}
              className="card-img img-fluid"
              width="96"
              height="35"
            />
          </div>
        </div>

        <div className="mb-2 text-center"> 
      <a href="./ProductList.jsx" className="category-link" data-abc="true">
        {category}
      </a>
    </div>

      </div>
    </div>
    </>
  );
};

const ProductGrid = () => {
  const products = [
    {
      imageUrl:
        'https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png',
      category: 'Electronics',

    },  {
      imageUrl:
        'https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg',
      category: 'Clothing',
     
    },  {
      imageUrl:
        'https://th.bing.com/th/id/OIP.x28KKjnJuI1TCgKbJ09KCAHaE8?rs=1&pid=ImgDetMain',
      category: 'Home & Kitchen',
     
    },  {
      imageUrl:
        'https://th.bing.com/th/id/OIP.BQTt5vaPXomBjewK-99-uQHaEv?rs=1&pid=ImgDetMain',
      category: 'Books & Stationery',
     
    },
    {
      imageUrl:
        'https://th.bing.com/th/id/OIP.xvxtVKR09bLB_49GDBSkgQHaE8?rs=1&pid=ImgDetMain',
      category: 'Sports & Outdoors',
     
    },
    {
      imageUrl:
        'https://tse3.mm.bing.net/th?id=OIP.Mwgks66YgYSY26xadg6MGQHaEK&pid=Api&P=0&h=220',
      category: 'Jewellery',
     
    },
   
  ];

  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
