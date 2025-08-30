import PricingTiers from "@/modules/Normal/PricingTiers";
import ServiceFees from "@/modules/Normal/ServiceFees";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <PricingTiers />
      <ServiceFees />
    </div>
  );
};

export default Pricing;
