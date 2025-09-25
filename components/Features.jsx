import { Shield, CirclePlus, ChartSpline, CalendarCheck, Crosshair } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Easy Service Booking",
      description:
        "Streamlined booking process for clients with service catalogs and availability.",
      icon: <CalendarCheck className="w-6 h-6" />,
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor job progress, employee hours, and project timelines with live updates.",
      icon: <Crosshair  className="w-6 h-6" />, 
    },
    {
      title: "Performance Analytics",
      description:
        "Comprehensive reporting and insights to improve business operations and efficiency.",
      icon: <ChartSpline className="w-6 h-6" />,
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.8% uptime guarantees and data protection.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="container mx-auto sm:px-6 lg:px-8 bg-white py-12">
      <div className="container mx-12 md:mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left sm:item-left py-12">
          {features.map((feature, index) => (
            <div key={index} className="sm:text-left">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 ">
                <div className="text-green-600">{feature.icon}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
