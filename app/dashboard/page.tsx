const actions = [
	['SOS Emergenza', 'Aiuto immediato'],
	['Trova aiuto', 'Donne vicino a te'],
	['Community', 'Chat e supporto'],
	['Corsi', 'Impara e cresci'],
];

const stats = [
	['1247', 'Online ora'],
	['89', 'Aiuti oggi'],
	['3421', 'Corsi completati'],
];

export default function DashboardPage() {
	return (
		<main className="min-h-screen text-white">
			<div className="mx-auto max-w-3xl px-6 py-12">
				<div
					className="safe-hero text-center mb-8"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwKy6Elj07ZkA8PYMccq9XSwVI0rEtFroIKiEjkoZO91qiVrQpmnoARH3-5LHCXu7LNzGULYParoY4FFV2vaTSKctSq3ox3Z6CfkyQWiti9kytTT9Ihafz5j4ZpH0TAkRKKTptPxxrSUswWK05nCfzEZshNzlffG0AOjSz0w9jUUerpCN6CoVEuL3PWIBTI2hEtFXjfodzknE1Ct-QZQ73fFd5UvfVoHXobspUHJyJ-lsRUfDZ55DH_hB5DEwRSFBWEHZFK_KVjQw')",
					}}>
					<h1 className="text-5xl font-semibold italic">Safe Mate</h1>
					<p className="mt-2 text-white/90">La tua rete di sicurezza e supporto</p>
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
