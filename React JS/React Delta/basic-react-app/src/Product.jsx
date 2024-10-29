import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
	let OldPrice = ["12,000", "11,999", "1,599", "599"];
	let NewPrice = ["8,999", "7,999", "3,999", "2,999"];
	let Description = [
		["8,000 DPI", "5 Programble button"],
		["Oled display" , "Long battery life"],
		["i7 processor, 16gb RAM", "120hz refresh"],
		["Wireless", "optical orientation"],
	];
	return (
		<div className="Product">
			<h4>{title}</h4>
			<p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
			<Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]} />
		</div>
	);
}

export default Product;
