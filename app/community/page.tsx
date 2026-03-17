'use client';

import { useMemo, useState } from 'react';

type ChatItem = {
	id: number;
	name: string;
	lastMessage: string;
	time: string;
	unread: number;
};

const localChats: ChatItem[] = [
	{
		id: 1,
		name: 'Milano Centro',
		lastMessage: 'Qualcuna vuole compagnia per tornare a casa?',
		time: '2 min fa',
		unread: 3,
	},
	{
		id: 2,
		name: 'Roma Trastevere',
		lastMessage: 'Nuovo locale sicuro scoperto!',
		time: '5 min fa',
		unread: 0,
	},
	{
		id: 3,
		name: 'Napoli Vomero',
		lastMessage: 'Ciao ragazze, come state?',
		time: '12 min fa',
		unread: 1,
	},
];

const nationalChats: ChatItem[] = [
	{
		id: 4,
		name: 'Supporto Generale',
		lastMessage: 'Grazie per i consigli di ieri',
		time: '1h fa',
		unread: 5,
	},
	{
		id: 5,
		name: 'Autodifesa',
		lastMessage: 'Nuovo corso online disponibile',
		time: '3h fa',
		unread: 0,
	},
];

export default function CommunityPage() {
	const [tab, setTab] = useState<'local' | 'national'>('local');

	const chats = useMemo(() => (tab === 'local' ? localChats : nationalChats), [tab]);

	return (
		<main className="safe-section max-w-3xl">
			<div className="safe-card p-6 mb-6">
				<h1 className="text-4xl font-semibold mb-1">Community</h1>
				<p className="text-neutral-500">Connettiti con altre donne</p>
			</div>

			<div className="safe-card p-2 mb-5 flex gap-2">
				<button
					className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
						tab === 'local' ? 'bg-sky-500 text-white' : 'bg-neutral-100'
					}`}
					onClick={() => setTab('local')}>
					Locali
				</button>
				<button
					className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium ${
						tab === 'national' ? 'bg-sky-500 text-white' : 'bg-neutral-100'
					}`}
					onClick={() => setTab('national')}>
					Nazionali
				</button>
			</div>

			<div className="safe-card divide-y divide-black/5">
				{chats.map(chat => (
					<article key={chat.id} className="p-4">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="font-semibold">{chat.name}</h2>
								<p className="text-sm text-neutral-500">{chat.lastMessage}</p>
							</div>
							<div className="text-right">
								<p className="text-xs text-neutral-500">{chat.time}</p>
								{chat.unread > 0 && (
									<span className="inline-block mt-1 rounded-full bg-sky-500 px-2 py-0.5 text-xs text-white">
										{chat.unread}
									</span>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</main>
	);
}
