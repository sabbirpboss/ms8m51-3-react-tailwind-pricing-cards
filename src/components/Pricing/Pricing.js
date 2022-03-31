import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0},
        {id: 2, name: 'Regular', price: 9.99},
        {id: 3, name: 'Premium', price: 99.99}
    ]
    return (
        <div className='bg-indigo-400 p-4 mt-8'>
            <h2 className='text-6xl font-mono text-white'>Best Deals of the Universe</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis assumenda officia impedit natus quae deleniti.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(pricingOption => <PricingOptions 
                        key={pricingOption.id}
                        pricingOption={pricingOption}></PricingOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;