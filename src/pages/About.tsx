import Mission from "@/modules/Normal/Mission";
import ServiceStory from "@/modules/Normal/ServiceStory";
import TeamDetails from "@/modules/Normal/TeamDetails";

const About = () => {
  return (
    <div className="min-h-screen">
      <ServiceStory />
      <Mission />
      <TeamDetails />
    </div>
  );
};

export default About;
