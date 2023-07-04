import { supabase } from 'supabase';

export default function ProductPage({ product }) {
	return <div></div>;
}

export async function getStaticPaths() {
	const { data: products } = await supabase.from('product').select('slug');

	const paths = products.map((product) => ({
		params: {
			slug: product.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps(context) {
	const slug = context.params.slug;

	const { data: product } = await supabase.from('product').select('*').eq('slug', slug).single();

	return {
		props: {
			product,
		},
	};
}
