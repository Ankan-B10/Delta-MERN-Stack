export default function price({ OldPrice, NewPrice }) {
    let oldStyle = {
      textDecoration: "line-through",
    };
    let newStyle = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        height: "30px",
        width: "200px",
    }
	return (
		<div style={styles}>
			<span style={oldStyle}>{OldPrice}</span>
			&nbsp;&nbsp;&nbsp;
			<span style={newStyle}>{NewPrice}</span>
		</div>
	);
}
