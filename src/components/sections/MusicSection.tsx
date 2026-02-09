
import { motion } from 'framer-motion';
const M = motion as any;
export default function MusicSection() {
	return (
		<M.div className="p-6 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h3 className="text-2xl font-bold">Música</h3>
			<p className="mt-2 text-lg max-w-xl">La música vive aquí — placeholder copy.</p>
		</M.div>
	);
}
