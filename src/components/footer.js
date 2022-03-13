import * as React from "react"

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="centered">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_dv">
								<br />
								<h4>Kontakt</h4>
								<ul>
									<li/>
									<li>T + 49 (0)711 / 262 49 64</li>
									<li><a href="mailto:muellerprints@t-online.de">muellerprints@t-online.de</a></li>
									<li><a href="/office-hours.html">Öffnungszeiten</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_dv">
								<br />
								<h4>Rechtliches</h4>
								<ul>
									<li/>
									<li><a href="/imprint.html">Impressum</a></li>
									<li><a href="/disclaimer.html">Datenschutz</a></li>
									<li><a href="/payment.html">Zahlungsarten</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4">
							<div className="footer_dv">
								<br />
								<h4>Sonstiges</h4>
								<ul>
									<li/>
									<li><a href="/links.html">Links</a></li>
									<li><a href="/anfahrt.html">Anfahrt</a></li>
									<li/>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
