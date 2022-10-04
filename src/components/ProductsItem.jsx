import { useState, useEffect } from "react"; 

function ProductsItem (props) {
    const [item, setItem] = useState({})
    const url = "https://fakestoreapi.com"

    useEffect(()=>{
        if(props.id){
        fetch(`${url}/products/${props.id}`)
            .then(res =>res.json())
            .then(res=>{
                console.log(res)
                setItem(res)
            })
        }
    }, [props.id])

    return props.id && (
           
         <div className="products-item">{item.title} : {item.price}  ({item.id})</div>              
    )
}


export default ProductsItem