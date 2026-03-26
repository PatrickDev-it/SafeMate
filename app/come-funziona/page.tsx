export default function ComeFunzionaPage() {
	const chatTypes = [
		{
			label: 'Le fondamenta di Safe-Mate',
			content: 'Le donne sono il fondamento della nostra società, esempio di resilienza e progresso. Troppo spesso il loro futuro viene messo a rischio proprio dove dovrebbero essere protette.',
		},
		{
			label: 'La missione',
			content: 'Safe-Mate nasce per colmare il vuoto tra il pericolo e l’intervento delle forze dell’ordine, trasformando il dolore e la paura in forza e tenacia, per cambiare davvero la società.',
		},
		{
			label: 'Impegno totale',
			content: 'Crediamo nell’autodeterminazione e nella libertà di essere donna, senza timori o imposizioni. Il nostro impegno è fornire tutti i mezzi necessari per non essere più vittime e raggiungere i propri obiettivi, umani ed economici.',
		},
		{
			label: 'Un unico obiettivo',
			content: 'Non ci fermeremo finché ogni donna non avrà la certezza di non essere più sola.',
		},
		{
			label: 'Il futuro che vogliamo',
			content: 'Insieme possiamo costruire un futuro dove il silenzio non è più un’opzione e ogni donna ha una voce che non passerà inosservata. La nostra missione è onorare il sacrificio di chi non è più tra noi.',
		},
		{
			label: 'La mappa della fiducia',
			content: 'Non ci basiamo sulle statistiche ufficiali, ma su una mappa costruita sulle percezioni reali e sul vissuto quotidiano delle utenti.',
		},
		{
			label: 'Protezione discreta',
			content: 'Interfaccia nascosta e specifica per situazioni di violenza domestica, per chiedere supporto senza destare sospetti.',
		},
		{
			label: 'Risposta rapida',
			content: 'La posizione viene condivisa in modo approssimativo per permettere ai rinforzi di intervenire nel minor tempo possibile.',
		},
		{
			label: 'La community che premia',
			content: 'Premiamo le azioni positive: ogni buona azione fa guadagnare punti e badge personali, diventando “safe-guard” tramite attività di supporto o volontariato. Offriamo corsi e quiz per aumentare la consapevolezza sociale e corsi di autodifesa al femminile.',
		},
		{
			label: 'Partnership per il cambiamento',
			content: 'Collaboriamo con associazioni e fondazioni per garantire standard di sicurezza senza precedenti, insieme a brand che mettono al centro il benessere e la valorizzazione delle donne.',
		},
		{
			label: 'Empowerment economico',
			content: 'Supportiamo economicamente le donne del futuro, finanziando e aiutando lo sviluppo di start-up femminili e offrendo formazione dedicata.',
		},
	];

	return (
		<main>
			<section className="safe-section">
				<div
					className="safe-hero min-h-[56vh] flex items-end"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuArFey8vD-okSul5fNA7mpXcPY6THNZ7As_WnaefjpmJozLnXIEJ8HhgZQtGYn25IsKjXptORQomnMqmOrAP8Z2HpcGJaJFfeJb4DpojIaL8Of4LWEOC34s8qWZdA1kcGxMNdKMYsR50WBenRn3wMZMmulKMtsq4qU3vPnlbE6_rXI1XgvuebIFyoBz7eqhYc9dohODp8vimCoGyR-8QIWngxSdFje9GJ4yIKplVT4s0GVzTaTT3SUcdJ19M8OsVmGd1gUTuQUoM5Q')",
					}}>
					<div className="max-w-2xl text-white bg-black/35">
						<h1 className="text-5xl font-semibold mb-4">Come funziona SafeMate</h1>
						<p className="text-white/90 text-lg leading-relaxed">
							Prevenzione, rete locale, risposta rapida e strumenti digitali per trasformare il pericolo in protezione
							concreta.
						</p>
					</div>
				</div>
			</section>

			<section className="safe-section pt-0">
				<h2 className="text-3xl font-semibold mb-6">Spiegazione completa del modello SafeMate</h2>
				<div className="grid md:grid-cols-2 gap-4">
					{chatTypes.map((item, index) => (
						<div key={`text-${index + 1}`} className="safe-card p-5">
							<p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-2">{item.label}</p>
							<p className="text-sm text-neutral-700 leading-relaxed">{item.content}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
