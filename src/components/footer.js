import * as React from "react"

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="centered">
					<div className="row">
						{/* Branding/Adresse links */}
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="footer_dv">
								<br />
								<strong>MUELLERPRINTS.<br />STUTTGART</strong>
								<ul>
									<li />
									<li>T + 49 (0)711 / 262 49 64</li>
									<li>Mo – Do 9.00 - 16.00 Uhr<br />Fr 9.00 - 14 Uhr</li>
								</ul>
							</div>
						</div>

						{/* Kontakt */}
						<div className="col-lg-3 col-md-3 col-sm-6">
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

						{/* About */}
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="footer_dv">
								<br />
								<h4>ABOUT</h4>
								<ul>
									<li />
									<li><a href="/bestellverlauf">Bestellverlauf</a></li>
									<li><a href="/versandarten">Versandarten</a></li>
									<li><a href="/payment">Zahlungsarten</a></li>
								</ul>
							</div>
						</div>

						{/* Rechtliches */}
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="footer_dv">
								<br />
								<h4>RECHTLICHES</h4>
								<ul>
									<li />
									<li><a href="/disclaimer">Datenschutzerklärung</a></li>
									<li><a href="/cookies">Verwendung von Cookies</a></li>
									<li><a href="/agbs">Allgemeine Geschäftsbedingungen</a></li>
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
