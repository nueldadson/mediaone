import React, { useEffect, useState } from "react";

const ProgressBars = () => {
	const bars = [
		{ label: "DATA-DRIVEN INSIGHTS", percentage: 100, target: 45 },
		{ label: "INDUSTRY EXPERTISE", percentage: 100, target: 55 },
		{ label: "CREATIVE SOLUTIONS", percentage: 100, target: 65 },
		{ label: "CUSTOMER SUPPORT", percentage: 100, target: 80 },
		{ label: "RESULTS-DRIVEN PHILOSOPHY", percentage: 100, target: 35 },
	];

	const [progress, setProgress] = useState(
		bars.map(() => ({ value: 0, isAnimating: false })),
	);

	useEffect(() => {
		const handleScroll = () => {
			const bars = document.querySelectorAll(".progress-bar");

			bars.forEach((bar, index) => {
				const rect = bar.getBoundingClientRect();
				const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

				setProgress((currentProgress) => {
					const newProgress = [...currentProgress];

					if (inViewport) {
						newProgress[index] = {
							...newProgress[index],
							value: 100,
							isAnimating: true,
						};
					} else {
						newProgress[index] = {
							...newProgress[index],
							value: 0,
							isAnimating: false,
						};
					}

					return newProgress;
				});
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((currentProgress) => {
				const newProgress = currentProgress.map((bar, idx) => {
					if (bar.isAnimating) {
						const nextValue = bar.value === 100 ? bars[idx].target : 100;
						return { ...bar, value: nextValue };
					}
					return bar;
				});
				return newProgress;
			});
		}, 1000); // Adjust timing for consistent animations

		return () => clearInterval(interval);
	}, [progress]);

	return (
		<div
			id="progress-bars-container"
			className="py-14 px-14 sm:px-40 lg:px-60 bg-black text-gray-200"
		>
			{bars.map((bar, index) => (
				<div key={index} className="mb-8 progress-bar">
					<div className="flex justify-between items-center mb-1">
						<span className="text-sm md:text-base font-semibold uppercase">
							{bar.label}
						</span>
						<span className="text-sm  font-semibold">
							{progress[index].value}%
						</span>
					</div>
					<div className="relative h-1 bg-gray-700 rounded">
						<div
							className="absolute top-0 left-0 h-full bg-gray-200 rounded transition-all duration-1000 ease-out"
							style={{
								width: `${progress[index].value}%`,
							}}
						></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProgressBars;
