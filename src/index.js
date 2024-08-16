export default {
	async fetch() {
		const destinationURL = 'https://raw.githubusercontent.com/kurtosis-tech/kardinal/main/scripts/install_cli.sh';
		const statusCode = 302;
		return Response.redirect(destinationURL, statusCode);
	},
};
