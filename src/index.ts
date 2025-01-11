type Methods =
	| "card"
	| "netbanking"
	| "wallet"
	| "emi"
	| "upi"
	| "interface Options";

interface Prefill {
	name: string;
	email: string;
	contact: string;
	method: Methods;
}

interface Theme {
	hide_topbar: boolean;
	color: string;
	backdrop_color: string;
}

interface Options {
	key: string;
	name: string;
	subscription_id: string;
	subscription_card_change?: boolean;
	recurring?: boolean;
	callback_url?: string;
	redirect?: boolean;
	customer_id?: string;
	remember_customer?: boolean;
	timeout?: number;
	description?: string;
	image?: string;
	notes?: Record<string, string>;
	prefill: Partial<Prefill>;
	theme: Partial<Theme>;
}

const CHECKOUT_JS = "https://checkout.razorpay.com/v1/checkout.js";

export class RazorpaySubscriptioCheckout {
	private options: Options;
	private razorpay: any;

	constructor(options: Options) {
		this.options = options;
		this.loadCheckoutScript(this.initializeRazorpay);
	}

	// The callback is to ensure the script is fully loaded before initializing.
	private loadCheckoutScript(callback: () => void): void {
		const checkoutScript = document.createElement("script");
		checkoutScript.src = CHECKOUT_JS;
		checkoutScript.onload = () => callback.call(this);
		document.head.appendChild(checkoutScript);
	}

	private initializeRazorpay(): void {
		this.razorpay = new (window as any).Razorpay(this.options);
	}

	public open(): void {
		if (this.razorpay) this.razorpay.open();
	}
}
