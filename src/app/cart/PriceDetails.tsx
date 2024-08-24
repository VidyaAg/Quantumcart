import { FC } from "react";

interface PriceDetailsProps {
  originalPrice: string;
  discount: string;
  platformFee: string;
  deliveryCharges: string;
  totalAmount: string;
  savings: string;
}

const PriceDetails: FC<PriceDetailsProps> = ({ originalPrice, discount, platformFee, deliveryCharges, totalAmount, savings }) => (
  <div className="p-4 bg-white rounded shadow-md">
    <h3 className="font-bold mb-4">PRICE DETAILS</h3>
    <div className="flex justify-between mb-2">
      <p>Price (1 item)</p>
      <p>{originalPrice}</p>
    </div>
    <div className="flex justify-between mb-2">
      <p>Discount</p>
      <p className="text-green-500">-{discount}</p>
    </div>
    <div className="flex justify-between mb-2">
      <p>Platform Fee</p>
      <p>{platformFee}</p>
    </div>
    <div className="flex justify-between mb-2">
      <p>Delivery Charges</p>
      <p>{deliveryCharges}</p>
    </div>
    <div className="flex justify-between mb-4 font-bold">
      <p>Total Amount</p>
      <p>{totalAmount}</p>
    </div>
    <p className="text-green-500 text-sm">You will save {savings} on this order</p>
  </div>
);

export default PriceDetails;
