import React, { useEffect, useState } from 'react';
import SEO from '../seo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SuccessMessage from './SuccessMessage';
import cardStyles from './stripeCardStyles';
import { validateEmailAddress } from '../../utils/regex';
import { API_URL } from '../../utils/url';
import { SmallLoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

const Checkout = ({ toggleShowCheckout, cart, clearCart }) => {
  const [token, setToken] = useState(null);
  const [total, setTotal] = useState(null);
  const [cardInputIsFocused, setCardInputIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState(null);
  const [invalidFields, setInvalidFields] = useState([]);
  const [error, setError] = useState(null);
  const [customFormFields, setCustomFormFields] = useState({
    name: '',
    email: '',
    confirmEmail: '',
  });
  const stripeObj = useStripe();
  const elements = useElements();

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
        setError(`
          Payment could not be processed.
          ${data.error}}
        `);
      } else {
        setError(null);
        setToken(data.client_secret);
        setTotal(data.amount);
      }
    };
    loadToken();
  }, []);

  const checkFieldsAreValid = () => {
    const invalidsArr = [];
    if (!customFormFields.name.length) invalidsArr.push('name');
    if (!validateEmailAddress(customFormFields.email))
      invalidsArr.push('email');
    if (customFormFields.email !== customFormFields.confirmEmail)
      invalidsArr.push('confirm-email');
    setInvalidFields(invalidsArr);
    return !invalidsArr.length;
  };

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
        throw new Error('Some fields are invalid');
      }
      const result = await stripeObj.confirmCardPayment(token, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      const { paymentIntent } = result;
      const { name, email } = customFormFields;
      const data = {
        paymentIntent,
        name,
        email,
        cart,
      };
      fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            console.log(response);
            throw new Error(`${response.status} - Something went wrong`);
          }
          setSuccess(true);
          return response.json();
        })
        .then(({ orderId, id }) => {
          const orderIdSubStr = orderId.substring(orderId.length - 5)
          setConfirmationNumber(`${id}-${orderIdSubStr}`)
        })
        .catch(err => setError(err.message));
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      clearCart();
    }
  };

  const toggleCardInputIsFocused = () =>
    setCardInputIsFocused(!cardInputIsFocused);

  if (token || error) {
    return (
      <>
        <SEO title="checkout" />
        {token && !error && !success && (
          <form className="checkout-form">
            <div className="checkout__payment">
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
                <label htmlFor="confirm-email">
                  Confirm Email *
                  <input
                    className={
                      invalidFields.includes('confirm-email')
                        ? 'checkout-form__custom-input checkout-form__custom-input--invalid input-reset'
                        : 'checkout-form__custom-input input-reset'
                    }
                    id="confirm-email"
                    type="email"
                    name="confirmEmail"
                    value={customFormFields.confirmEmail}
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
                {/* stripe api total is in cents */}
                Total: ${total && parseFloat(total / 100).toFixed(2)} USD
              </p>
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
            </div>
          </form>
        )}
        {error && <ErrorMessage message={error} />}
        {success && <SuccessMessage confirmationNumber={confirmationNumber} />}
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
