import { useEffect, useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import GameCard from "@/components/GameCard";
import AboutMe from "@/components/AboutMe";
import CodeBackground from "@/components/CodeBackground";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample game data - you can update this with your actual projects
const initialGames = [
  {
    id: 1,
    title: "Build a base to survive",
    description:
      "A build to survive game where you build to defend yourself from enemies.",
    imageUrl: "../images/Banana.png",
    link: "https://www.roblox.com/games/70799674016060/Build-a-Base-to-Survive",
  },
  {
    id: 2,
    title: "Dungeon Crawler",
    description:
      "A -style dungeon crawler with modern mechanics and challenging puzzles.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1500",
    link: "https://example.com/game2",
  },
  {
    id: 3,
    title: "Strategy Commander",
    description:
      "Real-time strategy game where you command armies and conquer territories.",
    imageUrl:
      "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?auto=format&fit=crop&q=80&w=1500",
    link: "https://example.com/game3",
  },
];

const Index = () => {
  const [games, setGames] = useState(initialGames);

  useEffect(() => {
    // You could fetch your games data from an API here
    toast("Welcome to my portfolio!", {
      description:
        "Feel free to explore my game projects and learn more about me.",
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Blue code background */}
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Game Developer Portfolio
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-blue-100 mb-8">
            Creating immersive gaming experiences with cutting-edge technology
          </p>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a
              href="https://discordapp.com/users/903247827164090378"
              className="flex items-center gap-2"
            >
              Contact Me
            </a>
          </Button>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16">
          <AboutMe />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in working together? Don't hesitate to reach out!
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a
              href="https://discordapp.com/users/903247827164090378"
              className="flex items-center gap-2"
            >
              Contact Me
            </a>
          </Button>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-900/50 backdrop-blur-sm border-t border-blue-800 py-8">
        <div className="container mx-auto px-4 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Game Developer Portfolio. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
