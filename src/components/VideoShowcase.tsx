import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoShowcaseProps {
  videos: {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail?: string;
  }[];
}

const VideoShowcase = ({ videos }: VideoShowcaseProps) => {
  if (videos.length === 0) {
    return (
      <Card className="border border-blue-800 bg-blue-900/30 backdrop-blur-md">
        <CardContent className="p-6 text-center">
          <p className="text-blue-200">
            No videos available yet. Upload your system demonstration videos!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="overflow-hidden border border-blue-800 bg-blue-900/30 backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <CardHeader className="p-0">
            <AspectRatio ratio={16 / 9}>
              <video
                controls
                className="w-full h-full object-cover rounded-t-lg"
                poster={video.thumbnail}
              >
                <source src={video.videoUrl} type="video/mp4" />
                <source src={video.videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">{video.title}</h3>
            <p className="text-blue-200 leading-relaxed">{video.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoShowcase;
