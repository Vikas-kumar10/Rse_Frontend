import { UserRound, ShieldCheck, Award, Headset } from "lucide-react";

function Team() {
  const team = [
    {
      icon: <UserRound size={40} />,
      title: "Certified Engineers",
      desc: "Experienced professionals delivering reliable water treatment solutions.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Assurance",
      desc: "Every project follows strict quality standards and industry practices.",
    },
    {
      icon: <Award size={40} />,
      title: "10+ Years Experience",
      desc: "Trusted expertise in residential, commercial, and industrial projects.",
    },
    {
      icon: <Headset size={40} />,
      title: "24/7 Support",
      desc: "Quick response and dedicated customer support whenever you need us.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-rse-primary font-semibold uppercase tracking-wider">
            Our Strength
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-2">
            Meet Our Professional Team
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our skilled engineers and support specialists are committed to
            delivering safe, efficient, and high-quality water treatment
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-rse-gold/15 text-rse-primary flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
