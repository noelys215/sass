const benefits = [
	{ title: 'One Low Price' },
	{ subtitle: 'Save big, Get everything with a low monthly subscription.' },
	{ title: 'No Limits' },
	{ subtitle: 'Get all access to everything on site.' },
	{ title: 'Cancel Anytime' },
	{ subtitle: 'Pause or Stop your subscription whenever you like.' },
];

export default function Benefits() {
	return (
		<div className="bg-black">
			<div className="column-padding">
				<div className="content-grid xl">
					{benefits.map((benefit) => (
						<div key={benefit.title} className="spacing-base">
							<h3>
								{benefit.title}
								<br />
							</h3>
							<div>{benefit.subtitle}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
