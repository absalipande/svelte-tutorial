import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
	const { productId } = params;
	if (productId > 3) {
		throw error(404, { message: 'Product not found', hint: 'Try a different product' });
	}

	const title = 'Product details';
	const notification = 'End of season sale!';
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return { title, notification, product };
};
