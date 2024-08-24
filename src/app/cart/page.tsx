import CartItem from "./CartItem"
import PriceDetails from "./PriceDetails"

const Cart = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <CartItem
                        title="It Starts With Us And It Ends With Us Books Combo"
                        author="COLLEN HOOVER"
                        price="₹998"
                        discount="55% Off"
                        deliveryDate="Thu Aug 29"
                        outOfStock={true}
                    />
                    <CartItem
                        title="The Mountain Is You: Transforming Self-Sabotage Into ..."
                        author="Wiest Brianna"
                        price="₹440"
                        discount="55% Off"
                        deliveryDate="Thu Aug 29"
                    />
                    {/* Add more CartItems if needed */}
                </div>
                <PriceDetails
                    originalPrice="₹998"
                    discount="₹558"
                    platformFee="₹3"
                    deliveryCharges="₹20"
                    totalAmount="₹463"
                    savings="₹535"
                />
            </div>
            <div className="flex justify-end mt-4">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md">PLACE ORDER</button>
            </div>
        </div>
    )
}
export default Cart