const testimonials = [
  { name: "John Doe", review: "This app changed the way I manage my tasks!" },
  {
    name: "Sarah Smith",
    review: "Super easy and convenient. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        What Our Users Are Saying
      </h2>
      <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic">"{t.review}"</p>
            <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
