import React, { useState, useRef, CSSProperties } from "react";
import "../Styles/bubble_button.css";
type Props = {
	children: React.ReactNode;
	colorScheme: string;
	leftIcon?: React.ReactNode;
	onClick?: () => void;
	size?: "sm" | "lg" | "md" | "xl";
	style?: CSSProperties;
};

const Button = ({
	children,
	colorScheme,
	leftIcon,
	size,
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
				padding:
					size == "sm"
						? "0.3rem 0.6rem"
						: size == "lg"
						? "0.8rem 1.6rem"
						: size == "xl"
						? "1rem 2rem"
						: "0.5rem 1rem",
				...style,
			}}>
			<div
				className="bubbly-button_before"
				style={{
					backgroundImage: `radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 20%, ${colorScheme} 20%, transparent 30%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${colorScheme} 15%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%)`,
				}}></div>
			<div className="button_text">
				<div className="button_left_icon">{leftIcon}</div>
				<div> {children}</div>
			</div>

			<div
				className="bubbly-button_after"
				style={{
					backgroundImage: `radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, transparent 10%, ${colorScheme} 15%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%), radial-gradient(circle, ${colorScheme} 20%, transparent 20%)`,
				}}></div>
		</div>
	);
};

export default Button;
