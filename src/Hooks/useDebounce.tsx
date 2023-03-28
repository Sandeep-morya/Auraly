import React from "react";

type Props = {};

const useDebounce = (value: string, delay: number = 700) => {
	const [debouncedValue, setDebouncedValue] = React.useState(value);
	React.useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};

export default useDebounce;
