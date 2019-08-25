import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe=price * 100;
    const publishabableKey='pk_test_hviGa5yaDK1DvsltDjlnmtie';

    const onToken=token=>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        
        panelLabel='Pay Now'
        Token={onToken}
        stripeKey={publishabableKey}/>
    )
}

export default StripeCheckoutButton;