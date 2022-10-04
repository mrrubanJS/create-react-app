import { useState, useEffect } from "react";

import ProductsItem from "./ProductsItem";

function ProductsList() {
  const [list, setList] = useState([]);
  const [itemId, setId] = useState(null);
  const url = "https://fakestoreapi.com";

  useEffect(() => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res);
      });
  }, []);

  return (
    <div>
      <div className="products-list">
        {list.length > 0 && list.map((item, index) => {
          return (
            <div
              key={index}
              className="products-list__item"
              onClick={(event) => {
                setId(item.id);
              }}
              id={item.id}
            >
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div> ({item.id})</div>
            </div>
          );
        })}
      </div>
      <ProductsItem id={itemId}></ProductsItem>
    </div>
  );
}

export default ProductsList;
