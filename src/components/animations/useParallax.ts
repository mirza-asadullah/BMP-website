import { useEffect, useState } from "react";
export default function useParallax(strength = 30) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) / w;
      const y = (e.clientY - h / 2) / h;
      setOffset({ x: x * strength, y: y * strength });
    };
    const handleScroll = () => {
      const scY = window.scrollY / (document.body.scrollHeight || 1);
      setOffset((o) => ({ x: o.x, y: o.y + scY * (strength / 3) }));
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strength]);
  return offset;
}
