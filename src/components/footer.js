import * as React from "react"

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="centered">
					<div className="row">
						{/* Branding/Adresse links */}
						<div className="col-lg-4 col-md-4 col-sm-8">
							<div className="footer_dv">
								<br />
								<h4>MUELLERPRINTS.</h4>						
								<ul>
									<li />
									<li>T + 49 (0)711 / 262 49 64</li>
									<li>Mo – Do 9.00 - 16.00 Uhr<br />Fr 9.00 - 14 Uhr</li>
								</ul>
							</div>
						</div>

						{/* Kontakt */}
						<div className="col-lg-4 col-md-4 col-sm-8">
							<div className="footer_dv">
								<br />
								<h4>KONTAKT</h4>
								<ul>
									<li />
									<li><a href="/office-hours">Öffnungszeiten</a></li>
									<li><a href="/anfahrt">Anfahrt</a></li>
									<li><a href="/imprint">Impressum</a></li>
								</ul>
							</div>
						</div>

						{/* Rechtliches */}
						<div className="col-lg-4 col-md-4 col-sm-8">
							<div className="footer_dv">
								<br />
								<h4>RECHTLICHES</h4>
								<ul>
									<li />
									<li><a href="/disclaimer">Datenschutzerklärung</a></li>
									<li><a href="/payment">Zahlungsarten</a></li>
									<li><a href="/sitemap.xml">Sitemap</a></li>
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
