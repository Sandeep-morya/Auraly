import React from "react";
import { result } from "./data";

type Props = {};

const SingleVideo = (props: Props) => {
	const [data, setData] = React.useState(result);
	return <div>SingleVideo</div>;
};

export default SingleVideo;
