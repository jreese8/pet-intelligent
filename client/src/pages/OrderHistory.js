import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div>
        {user ? (
          <>
            <h2 className='p-3 d-flex justify-content-center text'>
              Order History for {user.firstName} {user.lastName}
            </h2>

            {user.orders.map((order) => (
              <div key={order._id}>
                <h3 className="d-flex justify-content-center">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>

                <div className="pb-5 shop">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index}>
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;