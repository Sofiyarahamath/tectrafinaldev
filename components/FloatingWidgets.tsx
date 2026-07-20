import Image from "next/image";
import Link from "next/link";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* Bottom Main Gradient Icon (Tectra Brand Badge) */}
      <div className="relative flex items-center justify-center cursor-pointer select-none">
        {/* Colorful gradient circle with chaticon.png background */}
        <div 
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 border border-white/20"
          style={{
            backgroundImage: "url('/images/chaticon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* SVG Logo overlay */}
          <img
            src="/images/Frame 1984081219.svg"
            alt="Tectra Logo Icon"
            className="w-7 h-7 md:w-8 md:h-8 object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
