export default function Plans() {
	return (
		<div className="bg-salmon border-right">
			<div className="column-padding centered">
				<div className="callout-wrap">
					<div className="plan">
						<div className="plan-wrap">
							<div className="plan-switch">
								Monthly
								<label className="switch">
									<input type="checkbox" />
									<span className="slider"></span>
								</label>
								Yearly
							</div>
							<h2 className="plan-name">{}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
