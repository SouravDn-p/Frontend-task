import Image from "next/image";
import Quotation from "../public/assets/Testimonials/quotations.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Patricia H.",
      role: "Landscaping Business Owner",
      avatar: "/assets/Testimonials/patricia.png",
      quote:
        "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      name: "Steven R.",
      role: "Field Manager",
      avatar: "/assets/Testimonials/Ahmed.png",
      quote:
        "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
      name: "Kaylynn H.",
      role: "Service Coordinator",
      avatar: "/assets/Testimonials/patricia.png",
      quote:
        "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what business owners and field workers have to say about
            ScapeSync
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-md rounded-lg p-6 relative"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed relative ">
                <span className=" relative z-10 text-black"> {testimonial.quote}</span>
                <Image
                  src={Quotation}
                  alt="quote"
                  className="absolute left-0 -top-5 z-0"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
