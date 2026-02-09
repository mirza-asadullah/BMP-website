import { motion } from "framer-motion";
const M = motion as any;
export default function MarketplaceSection() {
  return (
    <M.div
      className="p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-2xl font-bold">Marketplace</h3>
      <p className="mt-2 text-lg max-w-xl">
        Compra y vende en nuestro marketplace — placeholder copy.
      </p>
    </M.div>
  );
}
