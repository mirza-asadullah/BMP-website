import { motion } from "framer-motion";
const M = motion as any;
const bgFallback = "/src/assets/bgwelcome.png";
const msgFallback = "/src/assets/msgicon.png";
const animationFallback = "/src/assets/anim/animation1.webm";
const logoFallback = "/src/assets/logowelcome.png";
export default function WelcomePage() {
	return (
		<section className="w-full min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br background: #841DC0;
 via-purple-600 to-pink-500 
">
			{/* Soft light overlay layer matching Figma specs */}
           
			<div 
				className="absolute inset-0 pointer-events-none"
				style={{
					background: '#FFFFFF',
					mixBlendMode: 'soft-light',
					backdropFilter: 'blur(9.5px)',
					opacity: 1,
				}}
			/>
 <img
            src={bgFallback}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
			{/* Logo top left */}
			<div className="absolute top-8 left-8 z-30">
				<img src={logoFallback} alt="Vaihok" className="w-32 h-auto" />
			</div>

			{/* Main content container */}
			<div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left content */}
					<div className="text-white space-y-6">
						<M.h1
							className="text-5xl lg:text-7xl font-extrabold leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							Te damos
							<br />
							la Bienvenida
						</M.h1>

						<M.p
							className="text-xl lg:text-2xl font-medium leading-relaxed max-w-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, delay: 0.1 }}
						>
							A una experiencia sin precedentes
						</M.p>

						<M.p
							className="text-base lg:text-lg leading-relaxed max-w-lg opacity-90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9, delay: 0.2 }}
						>
							Aquí no solo tienes una app. Tienes tu red sin complicaciones: escribe, compra, paga, explora y transforma tu día... con la claridad de Vaihok.
						</M.p>

						<M.div 
							initial={{ opacity: 0 }} 
							animate={{ opacity: 1 }} 
							transition={{ delay: 0.4 }}
							className="pt-4"
						>
							<button className="bg-black/80 hover:bg-black text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-2xl hover:scale-105">
								Descubre Vaihok
							</button>
						</M.div>
					</div>

					{/* Right content - character with chat bubble */}
					<M.div 
						className="flex items-center justify-center relative"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						{/* Character container */}
						<div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
							{/* Character image/video */}
							<div className="w-full h-full flex items-center justify-center">
								<video 
									src={animationFallback}
									autoPlay 
									loop 
									muted 
									playsInline 
									className="w-full h-full object-contain"
								/>
							</div>

							{/* Chat bubble icon - positioned top right */}
							<M.img 
								src={msgFallback}
								alt="chat" 
								className="absolute top-8 right-8 w-20 h-20 lg:w-24 lg:h-24 drop-shadow-2xl"
								animate={{ 
									y: [0, -10, 0],
									rotate: [0, 5, 0, -5, 0]
								}}
								transition={{ 
									duration: 3, 
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
						</div>
					</M.div>
				</div>
			</div>
		</section>
	);
}
