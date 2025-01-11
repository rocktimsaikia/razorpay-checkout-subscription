# razorpay-subscription-checkout

Razorpay checkout integration for subscriptions only.

[![npm](https://img.shields.io/npm/v/npm-package-starter?color=bright)](https://npmjs.com/package/npm-package-starter)

## Installtion

```sh
npm i razorpay-subscription-checkout
```

## Usage

```javascript
import RazorpayCheckout from "razorpay-subscription-checkout";
import type {RazorpayCheckoutOptions} from "razorpay-subscription-checkout"

// Define options for the checkout
const options: RazorpayCheckoutOptions = {
	key: "RAZOPAY_API_KEY",
	subscription_id: "sub_00000000000001",
	name: "Your Company Name",
	description: "Monthly Test Plan",
	image: "/path/to/company-logo.jpg",
	callback_url: "https://yourwebsite.com/custom_callback_url/",
	prefill: {
		name: "Gaurav Kumar",
		email: "gaurav.kumar@example.com",
		contact: "+919876543210"
	},
	theme: {
		color: "#F37254"
	}
}

// Set up the Razorpay checkout instance
const razopay = RazorpayCheckout(options)

// Open the checkout modal
razorpay.open()
```

## API
For the complete API reference check the [Razorpay's offical documentation.](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps#123-checkout-options)


## LICENSE

[MIT](./LICENSE) License &copy; [Rocktim Saikia](https://rocktimsaikia.dev) 2025
