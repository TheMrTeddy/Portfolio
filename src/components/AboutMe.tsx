import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <Card className="border border-blue-800 bg-blue-900/30 backdrop-blur-md max-w-4xl mx-auto hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <CardContent className="p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About Me
        </h2>

        <div className="text-blue-100 space-y-4 text-lg">
          <p>
            Hello! I'm a passionate game developer with experience in creating
            games on roblox, I specialize in roblox scripting.
          </p>

          <p>
            With 2.5 years of experience developing roblox games, I have the
            experience necessary to complete your games. During my 2.5 years on
            roblox, I've accumulated a total of 40 million contributed visits.
          </p>

          <p>
            My biggest goal is to make you as the customer as happy as possible.
            I will do everything in my power to make your dreams come true. So
            what do you say? Let's make something amazing together!
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-bold text-white mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Roblox Scripting",
                "Deep understanding of computers",
                "Problem Solving",
                "Rojo",
                "Knit",
                "Profile Store",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-800/50 text-blue-200 border border-blue-700 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
