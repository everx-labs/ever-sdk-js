// @flow
/* eslint-disable import/prefer-default-export */
export const SubscriptionContractPackage = {
    abi: {
        'ABI version': 0,
        functions: [{
            name: 'constructor',
            inputs: [{ name: 'wallet', type: 'bits256' }],
            outputs: [],
        }, {
            name: 'subscribe',
            signed: true,
            inputs: [
                { name: 'subscriptionId', type: 'bits256' },
                { name: 'pubkey', type: 'bits256' },
                { name: 'to', type: 'bits256' },
                { name: 'value', type: 'duint' },
                { name: 'period', type: 'duint' },
            ],
            outputs: [{ name: 'subscriptionHash', type: 'bits256' }],
        }, {
            name: 'cancel',
            signed: true,
            inputs: [{ name: 'subscriptionId', type: 'bits256' }],
            outputs: [],
        }, {
            name: 'executeSubscription',
            inputs: [
                { name: 'subscriptionId', type: 'bits256' },
                { name: 'signature', type: 'bits256' },
            ],
            outputs: [],
        }, {
            name: 'getSubscription',
            inputs: [{ name: 'subscriptionId', type: 'bits256' }],
            outputs: [
                { name: 'to', type: 'bits256' },
                { name: 'amount', type: 'duint' },
                { name: 'period', type: 'duint' },
                { name: 'status', type: 'uint8' },
            ],
        }],
    },
    imageBase64: 'te6ccgECJwEABFMAAgE0AgEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATL/AIn0BSHBAZN49KCbePQN8rSAIPSh8jPiAwEBwAQCASAGBQAp/+ABw8AEhcfABAdMHAfJ00x8B8AKAgHWFwcBAawIAgEgEQkCASALCgBdvBPJjSGMCAgEwAxYVrkwDrjGxo6f/o9qJoa6ZAgIB6LflU5GZ2omhqGOeLZPaqQCAnUNDAH5tJsMexjAgIBMAMWFa5MA64xsaOn/6PaiaGumQICAegf5VLqQvHoHeVnpg+iAuZC8egd5WemP6IC5ELx6B3lZ6b/ogLiQvHoHeVmY5GfDQGcAysGDVIYQy8GDUCxlg4D0GOeFg4DKwYNUhhDLwYNQLGWDgPQY54WD5YPk6EAWAQm1EOvCQA4B/jGBAQCYAYsK1yYB1xjYAdP/0QGBAgCYAYsK1yYB1xjY0SEg7UTQ10yBAQD0D/KpcCF49A7ys9P/0RP5EPKodCF49A7ys9Mf0QFzIXj0DvKz0x/REqD4IyBYvJ51Inj0DvKz0wfRc7ryfN/Iyx/J0HRYePQWixA4dVh49BZw7UQPAcjQ10yBAQD0DvKpAXIhePQO8rMBcSF49A7yswEk7UTQ10yBAQD0F8jM7UTQ1DHPFsntVIIQJPThVXDIywfLH8+GgM4B03/RlYMGqQwhl4MGoFjLBwHoMc8LB8nQWDAB0//RcFlwEACCjj7++QBTbmRCZHlJbnQB7UdvEG8Y+kJvEsjPhkDKB8v/ydCOF8jPhSDPigBAgQEAz0DOAfoCgGvPQM7J2HD7ANgCAnATEgBVthtFdwxgQEAmAGLCtcmAdcY2NHtRNAg10pxutwBcG2BAQD0FsjMzsntVIAEJtmvYQaAUAfwxgQEAmAGLCtcmAdcY2IEBAJgBiwrXJgHXGNiBAQCYAYsK1yYB1xjY0wDTBliOFXF3A5JVIJzTANMGAyCmBwVZrKDoMd7TANMGWI4VcXcDklUgnNMA0wYDIKYHBVmsoOgx3tFeMCDXSYEBALrytiHXSYEBALrytiLXSYEBALoVAdLytiPBAfJ2JMEB8nZVMHBtePQWcQF49BYhyMt/ydAycgF49BYhyMsfydAycwF49Bb4I8jLH8nQdFh49BaLEAh1WHj0FiD5AALT/9HtRNDXTIEBAPQXyMztRNDUMc8Wye1UyM+GgMv/ydAWAG6ONI4uyHLPQXLPQHLPQHDPCz9wzwsfcc9AXM81AddJpL6Ucc9Azplxz0EByM7JzxTiydhw+wDYAgEgJhgBATAZAgPPwBsaABk0NcoBfpA+kD6AG8EgAWMINMH0x8wAfJ0ifQFgCD0DvKp1wsAjhkgxwLyaNUgxwDyaCH5AQHtRNDXC//5EPKo3oBwBAcAdAgEgIx4CASAgHwAJvBPJjSYCAnUiIQAJtJsMeyAACbUQ68IgAgJwJSQACbYbRXcQAAm2a9hBsAAFNswg'
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
