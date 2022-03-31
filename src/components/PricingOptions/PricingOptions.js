import React from 'react';

const PricingOptions = ({pricingOption}) => {
    const {name, price} = pricingOption;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold text-white'>{name}</h2>
            <p className='mt-2'>
                <span className='text-5xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
        </div>
    );
};

export default PricingOptions;