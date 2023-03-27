import React, { useState, useRef, CSSProperties } from "react";
import "../Styles/bubble_button.css";
type Props = {
	children: React.ReactNode;
	colorScheme: string;
	onClick?: () => void;
	style?: CSSProperties;
};

const Button = ({
	children,
	colorScheme,
	style,
	onClick = () => false,
}: Props) => {
	const [isHover, setIsHover] = useState(false);
	const ButtonRef = useRef<HTMLDivElement>(null);

	function animateButton() {
		ButtonRef.current!.classList.remove("animate");

		ButtonRef.current!.classList.add("animate");
		setTimeout(function () {
			ButtonRef.current!.classList.remove("animate");
		}, 500);
	}

	return (
		<div
			ref={ButtonRef}
			className="bubbly-button"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => {
				onClick();
				animateButton();
			}}
			style={{
				backgroundColor: colorScheme,
				boxShadow: `0 0 1rem 0px ${isHover ? colorScheme : "rgba(0,0,0,0.5)"}`,
				...style,
			}}>
			<div
				className="bubbly-button_before"
				style={{
					backgroundImage: `radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 20%, ${colorScheme} 20%, transparent 30%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${colorScheme} 15%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%)`,
				}}></div>

			<div> {children}</div>

			<div
				className="bubbly-button_after"
				style={{
					backgroundImage: `radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${colorScheme} 15%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%)`,
				}}></div>
		</div>
	);
};

export default Button;
