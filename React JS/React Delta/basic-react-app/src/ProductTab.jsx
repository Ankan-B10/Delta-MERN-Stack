import Product from "./Product.jsx";

function ProductTab() {
	let styles = {
		display: "flex",
		flexwrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
	};
	return (
		<div style={styles}>
			<Product title="Logitech Mouse" idx={0} />
			<Product title="Apple Pencil" idx={1} />
			<Product title="Hp laptop" idx={2} />
			<Product title="Zebronics Zeb" idx={3} />
		</div>
	);
}
export default ProductTab;
