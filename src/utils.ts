// Formart date into a string
function formartDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter of a word
function capitalizeFirstLetter(str: string): string {
	if (typeof str !== "string" || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formartDate, capitalizeFirstLetter };
