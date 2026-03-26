const actions = [
	['SOS Emergenza', 'Offriamo aiuto immediato grazie alla collaborazione con le migliori società di pronto intervento. Ogni intervento è a carico dell’associazione.'],
	['Trova aiuto', 'L’allarme viene inoltrato a tutte le donne presenti nel perimetro di sicurezza scelto dall’utente.'],
	['Community', 'Interagisci tramite chat locali e nazionali, fai crescere il tuo business supportata da una community reale e solidale, sostenendo le imprese femminili.'],
	['Corsi', 'Safe-Mate offre corsi di sensibilizzazione contro la violenza fisica e psicologica, e corsi di autodifesa in centri specializzati per donne che non vogliono più essere vittime.'],
];

const stats = [
	['1247', 'Online ora'],
	['89', 'Aiuti oggi'],
	['3421', 'Corsi completati'],
];

export default function DashboardPage() {
	return (
		<main className="min-h-screen text-black">
			<div className="mx-auto max-w-3xl px-6 py-12">
				<div
					className="safe-hero text-center mb-8"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwKy6Elj07ZkA8PYMccq9XSwVI0rEtFroIKiEjkoZO91qiVrQpmnoARH3-5LHCXu7LNzGULYParoY4FFV2vaTSKctSq3ox3Z6CfkyQWiti9kytTT9Ihafz5j4ZpH0TAkRKKTptPxxrSUswWK05nCfzEZshNzlffG0AOjSz0w9jUUerpCN6CoVEuL3PWIBTI2hEtFXjfodzknE1Ct-QZQ73fFd5UvfVoHXobspUHJyJ-lsRUfDZ55DH_hB5DEwRSFBWEHZFK_KVjQw')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					<h1 className="text-5xl font-semibold italic text-white pt-5">Safe-Mate</h1>
					<p className="mt-2 text-white/85">La tua rete di sicurezza, supporto e crescita</p>
				</div>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">Azioni rapide</h2>
					<div className="grid grid-cols-2 gap-4">
						{actions.map(([title, subtitle]) => (
							<article key={title} className="safe-card p-4 text-neutral-800">
								<h3 className="font-semibold">{title}</h3>
								<p className="text-sm text-neutral-500">{subtitle}</p>
							</article>
						))}
					</div>
				</section>

				<section className="safe-card bg-white/25 p-6">
					<h2 className="mb-4 text-xl font-semibold">Community oggi</h2>
					<div className="grid grid-cols-3 gap-3 text-center">
						{stats.map(([value, label]) => (
							<div key={label}>
								<p className="text-2xl font-bold">{value}</p>
								<p className="text-xs text-white/80">{label}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
