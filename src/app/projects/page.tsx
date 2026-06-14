export default function ProjectsPage() {
  const projects = [
    {
      title: "Church Planting",
      status: "Ongoing",
      description: "We are planting new churches in communities that do not yet have a church. Our goal is to bring the Gospel to every unreached area.",
    },
    {
      title: "Leadership Training",
      status: "Ongoing",
      description: "We train pastors and church leaders across all regions. Strong leaders build strong churches that serve their communities well.",
    },
    {
      title: "Community Development",
      status: "Ongoing",
      description: "We work with local communities to improve lives through education, health, and development projects that bring real change.",
    },
    {
      title: "Missionary Support",
      status: "Ongoing",
      description: "We support missionaries who go to difficult places to share the love of Christ. Your giving helps them continue their important work.",
    },
    {
      title: "Children & Youth Programs",
      status: "Ongoing",
      description: "We run programs that help young people learn about God, stay in school, and develop skills for their future.",
    },
    {
      title: "Regional Church Building",
      status: "Ongoing",
      description: "Many of our churches need proper buildings for worship. We help communities build simple, strong church buildings.",
    },
  ];

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Special Projects</h1>
          <p className="text-lg text-gray-300">The work God is doing through ECCA</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-gold"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-olive-dark">{project.title}</h3>
                  <span className="bg-forest text-white text-xs px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-forest text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Support Our Projects</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Every project needs prayer and support. If God leads you to give toward any of these
              projects, please visit our giving page or contact us directly.
            </p>
            <a
              href="/give"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Give to a Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
