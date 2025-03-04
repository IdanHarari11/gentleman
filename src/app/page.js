import { HeroParallax } from "@/components/ui/hero-parallax";
import { AppleCardsSection } from "@/components/ui/apple-card";

export default function Home() {
  const products = [
    {
      thumbnail:
        "/images/girls/girl1.png",
    },
    {
      thumbnail:
        "/images/girls/girl2.png",
    },
    {
      thumbnail:
        "/images/girls/girl3.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl4.png",
    },
    {
      thumbnail:
        "/images/girls/girl5.png",
    },
    {
      thumbnail:
        "/images/girls/girl6.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl7.png",
    },
    {
      thumbnail:
        "/images/girls/girl1.png",
    },
    {
      thumbnail:
        "/images/girls/girl8.png",
    },
    {
      thumbnail:
        "/images/girls/girl9.png",
    },
    {
      thumbnail:
        "/images/girls/girl10.png",
    },
   
    {
      thumbnail:
        "/images/girls/girl11.png",
    },
    {
      thumbnail:
        "/images/girls/girl12.png",
    },
    {
      thumbnail:
        "/images/girls/girl13.png",
    },
    {
      thumbnail:
        "/images/girls/girl14.png",
    },
  ];
  
  return (
    <div className="bg-[#e2dfce] min-h-screen">
      <HeroParallax
        products={products}
        enableHover={false}
      />
      <AppleCardsSection />
    </div>
  );
}
