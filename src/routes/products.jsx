import { useState } from "react";

import placeholder from "@/assets/image.svg";

function Products() {
  const [products] = useState([
    {
      title: "Legend",
      price: 3999,
      description: "One legendary board, for legendary surfers.",
    },
    {
      title: "Legend - Custom",
      price: 5499,
      description: "Add your legend, and become one with the board.",
    },
  ]);

  return (
    <div className="px-2 lg:px-4 flex flex-col gap-2">
      <h1 className="font-subtitle">Products</h1>

      <div className="flex flex-col gap-1 lg:flex-row">
        {products.map((entry) => (
          <article key={entry.title} className="flex gap-1 flex-1">
            <figure className="placeholder image is-128x128">
              <img src={placeholder} alt="" />
            </figure>
            <div className="flex flex-col align-start gap-0.5">
              <strong className="font-subtitle">{entry.title}</strong>
              {/* Intl https://www.youtube.com/watch?v=acemrBKuDqw */}
              <button className="blue">{new Intl.NumberFormat(undefined, {style: 'currency', currency: 'SEK'}).format(entry.price)}</button>
              <p className="font-light">{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="hidden lg:flex gap-2 align-center justify-content-center">
        <div className="flex flex-col gap-1 grow">
          <strong className="font-subtitle font-semibold">
            Our boards, one guarantee
          </strong>
          <p className="font-prose">
            All of our boards come with the greatest in mind, for you and yours
            truly. Here's some more random lorem ipsum but it's Bob Ross...
            Bless him.
          </p>

          <p className="font-prose">
            Van Dyke Brown is a very nice brown, it's almost like a chocolate
            brown. All those little son of a guns. Just go back and put one
            little more happy tree in there. It just happens - whether or not
            you worried about it or tried to plan it.
          </p>

          <p className="font-prose">
            A fan brush is a fantastic piece of equipment. Use it. Make friends
            with it. Work that paint. Use your imagination, let it go.
          </p>

          <p className="font-prose">
            With practice comes confidence. The light is your friend. Preserve
            it. I started painting as a hobby when I was little. I didn't know I
            had any talent. I believe talent is just a pursued interest. Anybody
            can do what I do. You can bend rivers. But when I get home, the only
            thing I have power over is the garbage. A tree needs to be your
            friend if you're going to paint him. You can create anything that
            makes you happy.
          </p>
        </div>
        <div className="grow-0">
          <figure className="image is-196x196">
            <img src={placeholder} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Products;
