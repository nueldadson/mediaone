import React from "react";

const PersistentLines = () => {
	return (
		<div className="relative z-50 h-100%">
			{/* Line 1 */}
			<div className="fixed top-0 left-1/4 w-[3px] h-screen bg-line animate-line-flow"></div>

			{/* Line 2 */}
			<div className="fixed top-0 left-1/2 w-[3px] h-screen bg-line animate-line-flow"></div>

			{/* Line 3 */}
			<div className="fixed top-0 right-1/4 w-[3px] h-screen bg-line animate-line-flow"></div>
		</div>
	);
};

export default PersistentLines;
