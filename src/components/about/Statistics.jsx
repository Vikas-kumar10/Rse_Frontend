import { BriefcaseBusiness, Users, Award, Headset } from "lucide-react";

function Statistics() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={34} />,
      number: "500+",
      title: "Projects Completed",
      description:
        "Successfully delivering residential and industrial water treatment solutions.",
    },
    {
      icon: <Users size={34} />,
      number: "1000+",
      title: "Happy Clients",
      description:
        "Trusted by homeowners, businesses and industries across the region.",
    },
    {
      icon: <Award size={34} />,
      number: "10+",
      title: "Years Experience",
      description:
        "A decade of expertise in RO installation, maintenance and repair services.",
    },
    {
      icon: <Headset size={34} />,
      number: "24/7",
      title: "Customer Support",
      description:
        "Quick assistance whenever you need professional technical support.",
    },
  ];

  return (
    <section className="relative py-10 bg-slate-50 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-rse-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-rse-crimson/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-rse-gold/15 text-rse-text font-semibold text-sm">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted Water Treatment
            <span className="block text-rse-primary">
              Experts You Can Rely On
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            We take pride in providing high-quality water purification,
            installation, repair, and maintenance services with a strong
            commitment to customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-rse-primary text-white flex items-center justify-center group-hover:rotate-6 transition">
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                {item.number}
              </h3>

              <h4 className="mt-2 text-xl font-semibold text-slate-800">
                {item.title}
              </h4>

              <p className="mt-4 text-slate-500 leading-7 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
