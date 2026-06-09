export function trackWhatsapp() {
	window.fbq?.('track', 'Contact');
}

export function trackLead() {
	window.fbq?.('track', 'Lead');
}

export function trackEdredonLead() {
	window.fbq?.('trackCustom', 'EdredonesExpressLead');
	window.fbq?.('track', 'Lead');
}