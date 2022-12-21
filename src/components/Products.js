import React, {useEffect, useState} from 'react'
import Product from './Product'



const Products = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://fakestoreapi.com/products").then(res => 
        res.json()
        ).then(data => {
            setData(data)
            console.log(data)
        }).catch(err => {
          console.log(err)
        })

    }, [])

  return (
    <div>
        <Product data={data}/>
    </div>
  )
}

export default Products