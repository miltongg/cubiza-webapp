import React, { useEffect, useState } from 'react'

import productList from '../db/db.json'
import Layout from '../components/Layout'

interface Prod {
  name: string,
  img: string,
  category: string,
  description: string
}

const Products = () => {

  const [products, setProducts] = useState(productList)


  return (
    <Layout title={"productos"}>
      <div className='grid grid-cols-2'>
        <div className='m-auto'>
          <img src='../img/Grua-torre-5-ton-scaled-300x225.jpg' alt='product-img' />
        </div>
        <div className='text-black'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae non quas eveniet doloremque amet velit ducimus quasi cumque. Dolorum sapiente alias quo veritatis cum fuga expedita dolore odio nostrum earum? </p>
        </div>
      </div>
      <div className='mt-10 w-3/5 m-auto'>
        <div className='grid grid-cols-3'>
          {
            products.map((prod) => {

              if (prod.category === "Grúa Torre") {
                return (
                  <div key={prod.name}>
                    <div className='w-64 m-auto'>
                    <img src={prod.img} alt='product-image'/>
                   </div>
                   <div className="text-center mb-10 mt-2 text-black">{prod.name}</div>
                 </div>
                )
              }

            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default Products