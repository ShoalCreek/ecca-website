export default function LeadershipPage() {
  const leaders = [
    { name: "Aila Tasse Aila", title: "Chairman", role: "Director" },
    { name: "Ado Aila Dalata", title: "Vice Chairman", role: "Pastor" },
    { name: "Benard Mutia Munyao", title: "General Secretary", role: "Pastor" },
    { name: "Charles Mugambi Baariu", title: "Vice Secretary", role: "Pastor" },
    { name: "Simon Mburu Mwaura", title: "Treasurer", role: "Businessman" },
    { name: "Rahab Ngachu", title: "Vice Treasurer", role: "Businesswoman" },
    { name: "Harrison Nyamawi Madogo", title: "Trustee Member", role: "Pastor" },
  ];

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">National Leadership</h1>
          <p className="text-lg text-gray-300">The leaders who guide ECCA — 2025</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {leader.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-olive-dark">{leader.name}</h3>
                <p className="text-gold-dark font-semibold mt-1">{leader.title}</p>
                <p className="text-sm text-gray-500 mt-1">{leader.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-bold text-olive-dark mb-6">Local Church Structure</h2>
            <p className="text-gray-700 mb-6">
              Each ECCA local church is organized with clear roles to serve the community well:
            </p>
            <div className="space-y-3">
              {[
                { role: "The Pastor", desc: "Leads the church and its spiritual direction" },
                { role: "The Church Board", desc: "The pastor and elders who guide church decisions" },
                { role: "The Elders", desc: "Experienced leaders who help shepherd the church" },
                { role: "Ministerial Leaders / Deacons", desc: "Leaders who serve in different areas of ministry" },
                { role: "Area Coordinators", desc: "Cell group leaders who care for small groups" },
                { role: "DBS Facilitators", desc: "Leaders who guide Discovery Bible Study groups" },
                { role: "Disciples", desc: "Members growing in faith and serving God" },
              ].map((item) => (
                <div key={item.role} className="flex items-start gap-3 p-3 bg-cream rounded-lg">
                  <span className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-olive-dark">{item.role}</span>
                    <span className="text-gray-600"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
