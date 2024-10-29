import { useState } from "react";

export default function LikeButton() {
	//state variable make
	let [IsLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);
	let toggleLike = () => {
		let newVal = !IsLiked;
		setIsLiked(newVal);
        setClicks(clicks + 1);
	};
	let likeStyle = { color: "red" };
	// let clicked = () => {
	// 	console.log("clicked");
	// };
	return (
		<div>
            <p>Likes = {clicks}</p>
			<p onClick={toggleLike}>
				{/* {IsLiked.toString()} */}
				{IsLiked ? (
					<i className="fa-solid fa-heart" style={likeStyle}></i>
				) : (
					<i className="fa-regular fa-heart"></i>
				)}
			</p>
		</div>
	);
}

