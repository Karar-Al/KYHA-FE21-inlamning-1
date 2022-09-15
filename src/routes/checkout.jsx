import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { formatToCurrency } from "@/scripts/intl.js";
import "@/styles/routes/checkout.css";

function Checkout() {
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
      <strong className="font-subtitle">Checkout</strong>

      <table className="stretch">
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

      <div className="grow flex flex-col stretch align-center gap-1 justify-content-end mb-1">
        <strong className="font-subtitle">Payment</strong>
        <div className="flex flex-col gap-1 stretch">
          <Link to="/order">
            <button className="blue stretch">Swish</button>
          </Link>
          <Link to="/order">
            <button className="blue stretch">Internetbank</button>
          </Link>
          <Link to="/order">
            <button className="blue stretch">Kortbetalning</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
