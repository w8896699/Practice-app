import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import ReactLogo from '../../asset/logo/logo.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceFroStore = price * 100;
  const publishablekey = 'pk_test_F8ppCHuM5W7zeTKls9zKddME004ekGV2sd';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfully');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Company!"
      billingAddress
      shippingAddress
      image={ReactLogo}
      description={`Your total is $${price}`}
      amount={priceFroStore}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
