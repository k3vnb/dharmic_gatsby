import React, { useEffect, useState } from 'react';
import SEO from '../seo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { API_URL } from '../../utils/url';
import { SmallLoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

const cardStyles = {
  style: {
    base: {
      padding: '4%',
      fontSize: '1.3rem',
    }
  }
}

const Checkout = ({ toggleShowCheckout, cart }) => {
  const [token, setToken] = useState(null);
  const [total, setTotal] = useState('loading');
  const [error, setError] = useState(null);
  const stripeObj = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await stripeObj.confirmCardPayment(token, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    console.log({result})
  };

  useEffect(() => {
    const loadToken = async () => {
      const response = await fetch(`${API_URL}orders/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        setToken(data.client_secret);
        setTotal(data.amount);
      }
    };
    loadToken();
  }, [cart]);

  if (token || error) {
    return (
      <>
        <SEO title="checkout" />
        <form onSubmit={handleSubmit} className="checkout-form">
          {token && (
            <div className="checkout__payment">
              {/* stripe api total is in cents */}
              <h2 style={{ textAlign: 'center' }}>Checkout</h2>
              <p style={{ textAlign: 'right', fontFamily: 'Arial, sans' }}>
                Total: ${parseFloat(total / 100).toFixed(2)}
              </p>
              <CardElement options={cardStyles} />
            </div>
          )}
          {error && <ErrorMessage message={error} />}
          <div className="cart__btn-container">
            <button
              type="reset"
              className="btn cart__btn cart__btn--clear"
              onClick={toggleShowCheckout}
            >
              Go Back to Cart
            </button>
            <button
              type="button"
              disabled={!stripeObj || error}
              onClick={handleSubmit}
              aria-label="checkout"
              className="btn cart__btn cart__btn--checkout"
            >
              Submit Purchase
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <div
        className="flex-center"
        style={{ minWidth: '50vw', minHeight: '50vh' }}
      >
        <SmallLoadingSpinner />
      </div>
    );
  }
};

export default Checkout;
