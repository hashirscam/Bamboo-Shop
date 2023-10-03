import { MdClose } from 'react-icons/md'
import './cartitem.css'
import { Context } from '../../utils/context'
import { useContext, useState, useEffect } from 'react'
import { fetchCheckout, removeLineItem, updateLineItem } from '../../utils/api'

const Cartitem = (cartProducts) => {
  const { handleCartProductQuantity, cartRender, setCartRender} = useContext(Context);
  useEffect(() => {}, [])

  return (
    <div className="cart-products">
      {cartProducts.products.map(item => (
          <div key={item.id} className="cart-product">
            <div className="img-container">
            <img src={item.variant.image.src} alt='product-image' />
            </div>
            <div className="prod-details">
              <span className="name">{item.title}</span>
              <MdClose className="prod-close-btn" onClick={() => {
                removeLineItem(item.id)
                setCartRender(true)
              }}/>
              {/* <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity('dec' , item.id, item.quantity-1)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={() => handleCartProductQuantity('inc' , item.id, item.quantity+1)}>+</span>
              </div> */}
              <div className="eco__text">
                <span>{item.quantity}</span>
                <span>x</span>
                <span className='highlight'>&#36;{item.variant.price.amount}</span>
                <span>=</span>
                <span className='highlight'>&#36;{item.variant.price.amount * item.quantity}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cartitem