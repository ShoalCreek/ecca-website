export default function ChurchesPage() {
  const regions = [
    {
      name: "Nairobi",
      leader: "Aila / Benard",
      total: 5,
      churches: ["Ruai", "Huruma", "Zimmerman", "Ruiru", "Manyatta"],
    },
    {
      name: "Northern Kenya",
      leader: "Ado",
      total: 8,
      churches: ["Marsabit", "Maikona", "Sololo", "Dadachelel", "Elbor", "Moyale-Burji", "Moyale-Sessi", "Moyale-Manyata"],
    },
    {
      name: "Isiolo",
      leader: "Mwaura",
      total: 7,
      churches: ["Kulamawe", "Air Port", "Oldonyiro", "Mlima Chui", "Matundai", "Longopito", "Rumuruti"],
    },
    {
      name: "Meru",
      leader: "Mugambi",
      total: 5,
      churches: ["Tiira", "Nkinja", "Mwerene", "Irindi", "Muthala"],
    },
    {
      name: "Kitui",
      leader: "Kanini",
      total: 5,
      churches: ["Muluti", "Kanzau", "Kalolu", "Isovya", "Nguuni"],
    },
    {
      name: "Coast",
      leader: "Harrison",
      total: 23,
      churches: ["Kwale (17 churches)", "Samburu (3 churches)", "Tana River (2 churches)", "Shomela"],
    },
    {
      name: "Narok",
      leader: "Moses",
      total: 9,
      churches: ["Nariakiangare", "Range", "Sintakara", "Enoosupukia", "Ntulele", "Narok Town", "Duka Moja", "Naroosora Town", "Oloduguluponyi"],
    },
    {
      name: "Kisii",
      leader: "Musembi",
      total: 6,
      churches: ["Ekona", "Etago", "Nyamaiya", "Kenuchi", "Transmara", "Kuria"],
    },
    {
      name: "Maralal",
      leader: "Letoiya",
      total: 4,
      churches: ["Maralal Town", "Loosuk", "Nguata", "Natala"],
    },
  ];

  const totalChurches = regions.reduce((sum, r) => sum + r.total, 0);

  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Churches</h1>
          <p className="text-lg text-gray-300">
            {totalChurches} churches across {regions.length} regions in Kenya
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-forest text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">{totalChurches}</p>
              <p className="text-sm text-green-100">Total Churches</p>
            </div>
            <div className="bg-olive text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">{regions.length}</p>
              <p className="text-sm text-gray-200">Regions</p>
            </div>
            <div className="bg-gold-dark text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold">1</p>
              <p className="text-sm text-yellow-100">Nation (Growing)</p>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-olive-dark text-white px-6 py-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{region.name} Region</h3>
                    <p className="text-sm text-gray-300">Regional Leader: {region.leader}</p>
                  </div>
                  <div className="bg-gold text-olive-dark font-bold px-3 py-1 rounded-full text-sm">
                    {region.total} {region.total === 1 ? "church" : "churches"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {region.churches.map((church) => (
                      <span
                        key={church}
                        className="bg-cream text-olive-dark px-3 py-1 rounded-full text-sm border border-olive/20"
                      >
                        {church}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
