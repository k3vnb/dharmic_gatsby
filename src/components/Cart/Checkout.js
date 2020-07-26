import React, { useEffect, useState } from 'react';
import SEO from '../seo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateEmailAddress } from '../../utils/regex';
import { API_URL } from '../../utils/url';
import { SmallLoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

const cardStyles = {
  style: {
    base: {
      iconColor: '#c4f0ff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
    },
    invalid: {
      iconColor: '#E32E3F',
      color: '#E32E3F',
    },
  },
};

const Checkout = ({ toggleShowCheckout, cart }) => {
  const [token, setToken] = useState(null);
  const [total, setTotal] = useState('loading');
  const [cardInputIsFocused, setCardInputIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [error, setError] = useState(null);
  const [customFormFields, setCustomFormFields] = useState({
    name: '',
    email: '',
  });
  const stripeObj = useStripe();
  const elements = useElements();

  const checkFieldsAreValid = () => {
    const invalidsArr = [];
    if (!customFormFields.name.length) invalidsArr.push('name');
    if (!validateEmailAddress(customFormFields.email)) invalidsArr.push('email');
    setInvalidFields(invalidsArr);
    return !invalidsArr.length;
  }

  const handleChange = e =>
    setCustomFormFields({
      ...customFormFields,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
      try {
        if (!checkFieldsAreValid()) {
          throw new Error('Some fields are invalid')
        }
        const result = await stripeObj.confirmCardPayment(token, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
        console.log({ result });
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
  };

  const toggleCardInputIsFocused = () =>
    setCardInputIsFocused(!cardInputIsFocused);

  useEffect(() => {
    const loadToken = async () => {
      const response = await fetch(`${API_URL}/orders/payment`, {
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
        <form className="checkout-form">
          {token && (
            <div className="checkout__payment">
              {/* stripe api total is in cents */}
              <h2 style={{ textAlign: 'center' }}>Checkout</h2>
              <div className="checkout-form__custom-inputs">
                <label htmlFor="name">
                  Your Name *
                  <input
                    className={
                      invalidFields.includes('name')
                        ? 'checkout-form__custom-input checkout-form__custom-input--invalid input-reset'
                        : 'checkout-form__custom-input input-reset'
                    }
                    id="name"
                    type="text"
                    name="name"
                    value={customFormFields.name}
                    required
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Your Email *
                  <input
                    className={
                      invalidFields.includes('email')
                        ? 'checkout-form__custom-input checkout-form__custom-input--invalid input-reset'
                        : 'checkout-form__custom-input input-reset'
                    }
                    id="email"
                    type="email"
                    name="email"
                    value={customFormFields.email}
                    required
                    onChange={handleChange}
                  />
                </label>
              </div>
              Credit Card Info
              <CardElement
                className={
                  cardInputIsFocused
                    ? 'checkout-form__card-element checkout-form__card-element--focus'
                    : 'checkout-form__card-element'
                }
                options={cardStyles}
                onFocus={toggleCardInputIsFocused}
                onBlur={toggleCardInputIsFocused}
              />
              <p style={{ textAlign: 'right', fontFamily: 'Arial, sans' }}>
                Total: ${parseFloat(total / 100).toFixed(2)}
              </p>
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
              type="submit"
              disabled={!stripeObj || error || isSubmitting}
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
