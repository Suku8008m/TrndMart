import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const getTotalPrice = () => {
        const res = cartList.map(item => item.price * item.quantity)
        const total = res.reduce((acc, num) => acc + num, 0)
        return total
      }
      const getTotalItems = () => cartList.length

      const onRemoveAll = () => removeAllCartItems()

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-div">
                  <button type="button" onClick={onRemoveAll}>
                    Remove All
                  </button>
                </div>
                <CartListView />
                <div className="order-total">
                  <div className="total-order-details">
                    <h1>
                      Order Total: <span>Rs {getTotalPrice()}/-</span>
                    </h1>
                    <p>{getTotalItems()} Items in cart</p>
                    <button type="button">Checkout</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
