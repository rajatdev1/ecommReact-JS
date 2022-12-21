import React from 'react'

const Product = ({data}) => {
  return (
    <div className='row'>
        {data.map((ele) => (
            <div className="card mx-auto" style={{width: "18rem"}}>
            <img src={ele.image} className="card-img-top" alt="..."  height={"120px"}/>
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <p className="card-text">{ele.price} $</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Product