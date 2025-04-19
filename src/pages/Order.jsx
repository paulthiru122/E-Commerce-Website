import React from 'react'

export const Order = ({ order }) => {
    if (!order) {
        return (
            <div>
                <h2>No Order Found</h2>
                <p>Please place an order before accessing this page.</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Thank You for your order</h2>
            <p>Your Order has been placed successfully. You will receive an email confirmation shortly.</p>
            <div>
                <h3>Order Summary</h3>
                <p>Order Number: {order.orderNumber}</p>
                <div>
                    <h2>Shipping Information</h2>
                    <p>{order.shippingInformation.address}</p>
                    <p>{order.shippingInformation.city}</p>
                    <p>{order.shippingInformation.zip}</p>
                </div>
            </div>
            <div>
                <h3>Products Ordered</h3>
                {order.products.map((product, index) => (
                    <div key={index}>
                        <p>{product.name} x {product.quantity}</p>
                        <p>${product.price * product.quantity}</p>
                    </div>
                ))}
            </div>
            <div>
                <span>Total Price:</span>
                <span>${order.totalPrice}</span>
            </div>
            <div>
                <button>Order Tracking</button>
                <button>Continue Shopping</button>
            </div>
        </div>
    )
}
