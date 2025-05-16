
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GameProps {
  game: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card className="overflow-hidden border border-blue-800 bg-blue-900/30 backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="h-52 overflow-hidden">
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-blue-200 mb-4">{game.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="outline" 
          className="w-full border-blue-500 text-blue-300 hover:bg-blue-700 hover:text-white"
        >
          <a 
            href={game.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-full gap-2"
          >
            View Project <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
