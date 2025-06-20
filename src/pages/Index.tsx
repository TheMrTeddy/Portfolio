import { useEffect, useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import GameCard from "@/components/GameCard";
import AboutMe from "@/components/AboutMe";
import CodeBackground from "@/components/CodeBackground";
import VideoShowcase from "@/components/VideoShowcase";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample game data - you can update this with your actual projects
const initialGames = [
  {
    id: 1,
    title: "Build a base to survive",
    description:
      "A build to survive game where you build to defend yourself from enemies.",
    imageUrl: "/Portfolio/images/Build.png",
    link: "https://www.roblox.com/games/70799674016060/Build-a-Base-to-Survive",
  },
  {
    id: 2,
    title: "Obbies",
    description:
      "I've worked on a lot of obbies and I'm proficient in developing these systems.",
    imageUrl: "/Portfolio/images/Obby.png",
    link: "https://www.roblox.com/games/84454808342722/YOU-WILL-CRY-OBBY",
  },
];

const sampleVideos = [
  {
    id: 1,
    title: "FPS system",
    description:
      "A FPS system I've developed recently, structured with OOP and used Rojo.",
    videoUrl: "/Portfolio//videos/FPS.mp4",
    thumbnail: "/Portfolio//images/FPS.png",
  },
  {
    id: 2,
    title: "Minigames",
    description:
      "A minigames game with 17 minigames fully scripted by me, let me know if you wanna see more of it.",
    videoUrl: "/Portfolio//videos/MinigamesSystem.mp4",
    thumbnail: "/Portfolio//images/Minigames.png",
  },
  {
    id: 3,
    title: "Dealership System",
    description:
      "A dealership system I developed, combined with profile store to save purchased cars.",
    videoUrl: "/Portfolio//videos/Dealership.mp4",
    thumbnail: "/Portfolio//images/Dealership.png",
  },
  {
    id: 3,
    title: "3D Button",
    description: "An example of my skills in scripting UI and tweening.",
    videoUrl: "/Portfolio//videos/3DButton.mp4",
    thumbnail: "/Portfolio//images/3DButton.png",
  },
];

const Index = () => {
  const [games, setGames] = useState(initialGames);
  const [videos, setVideos] = useState(sampleVideos);

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
            Hey!
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-blue-100 mb-8">
            I'm Teddy, a professional roblox scripter
          </p>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a
              href="https://discord.com/users/903247827164090378"
              className="flex items-center gap-2"
            >
              Contact Me
            </a>
          </Button>
        </section>

        {/* Video Showcase Section */}
        <section id="video-showcase" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            System Demonstrations
          </h2>
          <VideoShowcase videos={videos} />
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
              href="https://discord.com/users/903247827164090378"
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
