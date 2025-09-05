import Developer from "@/modules/Normal/Developer";
import Mission from "@/modules/Normal/Mission";
import ServiceStory from "@/modules/Normal/ServiceStory";
import TeamDetails from "@/modules/Normal/TeamDetails";

const About = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <ServiceStory />
      <Mission />
      <Developer />
      <TeamDetails />
    </div>
  );
};

export default About;
