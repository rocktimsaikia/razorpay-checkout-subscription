# razorpay-checkout-subscription

Razorpay checkout integration for subscriptions only.

[![npm](https://img.shields.io/npm/v/npm-package-starter?color=bright)](https://npmjs.com/package/npm-package-starter)

## Installtion

```sh
npm i razorpay-checkout-subscription
```

## Usage

```javascript
import { RazorpayCheckoutSubscription } from "razorpay-checkout-subscription";

// Set up the Razorpay checkout instance
const razorpay = new RazorpayCheckoutSubscription({
	key: "RAZOPAY_API_KEY",
	subscription_id: "sub_00000000000001",
	name: "Acme Corp.",
	description: "Monthly Test Plan",
	image: "/your_logo.jpg",
	callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
	prefill: {
		name: "Gaurav Kumar",
		email: "gaurav.kumar@example.com",
		contact: "+919876543210"
	},
	notes: {
		note_key_1: "Tea. Earl Grey. Hot",
		note_key_2: "Make it so."
	},
	theme: {
		color: "#F37254"
	}
})

// Open the checkout modal
razorpay.open()
```

## API
For the complete API reference check the [Razorpay's offical documentation.](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps#123-checkout-options)


## LICENSE

[MIT](./LICENSE) License &copy; [Rocktim Saikia](https://rocktimsaikia.dev) 2025
