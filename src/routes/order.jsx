import { useMemo, useState } from "react";

import { formatToCurrency } from "@/scripts/intl.js";

import CheckCircle from "@/assets/check-circle.svg";
import "@/styles/routes/order.css";

function Order() {
  const [items] = useState([
    { title: "Legend", price: 3999 },
    { title: "Legend - Custom", price: 5499 },
  ]);

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items]
  );

  return (
    <div className="px-2 lg:px-4 flex flex-col gap-2 align-center grow">
      <strong className="font-subtitle">Order confirmation</strong>
      <figure className="image is-196x196 round-circle">
        <img src={CheckCircle} alt="" />
      </figure>
      <strong className="font-subtitle">Wave on!</strong>

      <table className="stretch">
        <thead>
          <tr>
            <td colSpan={2}><strong>Order Nr #chappIe</strong></td>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{formatToCurrency(item.price)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>{formatToCurrency(totalPrice)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Order;
