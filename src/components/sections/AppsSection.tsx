
import { motion } from 'framer-motion';
const M = motion as any;
export default function AppsSection() {
  return (
    <M.div className="p-6 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h3 className="text-2xl font-bold">Apps</h3>
      <p className="mt-2 text-lg max-w-xl">Una sola app para todo — placeholder copy.</p>
    </M.div>
  );
}
