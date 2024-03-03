export const VISSION =
	"To counsel, encourage and deliver a triune man from the bondage of sin. (1 Thessalonians 5: 23)";

// Define an interface for a link object
export interface Link {
	name: string;
	href: string;
}

export const legalLinks: Link[] = [
	{ name: "Privacy", href: "#" },
	{ name: "Terms", href: "#" },
	{ name: "Disclaimer", href: "#" },
];

export const companyLinks: Link[] = [
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "mailito:info@rhaphawellnessclinic.co.za" },
	{ name: "Articles", href: "/articles" },
	// { name: "Jobs", href: "#" },
	// { name: "Press", href: "#" },
	// { name: "Partners", href: "#" },
];

export const servicesLinks: Link[] = [
	{ name: "Services", href: "#" },
	{ name: "Counseling", href: "#" },
	{ name: "Wellness Programs", href: "#" },
	// { name: "Resources", href: "#" },
	// { name: "Testimonials", href: "#" },
	// { name: "Partners", href: "#" },
];

export const supportLinks: Link[] = [
	{ name: "Donations", href: "#" },
	{ name: "Volunterring", href: "#" },
	{ name: "Ladies Group", href: "#" },
	{ name: "Youth Group", href: "#" },
	{ name: "Men Youth", href: "#" },
];
