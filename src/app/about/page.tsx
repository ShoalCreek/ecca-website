export default function AboutPage() {
  return (
    <>
      <section className="bg-olive-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About ECCA</h1>
          <p className="text-lg text-gray-300">Our history, our beliefs, and who we are</p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-olive-dark mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Evangelical Christian Church of Africa (ECCA) is a Bible-believing, Bible-preaching,
              and Bible-living church. Our goal is to become disciples of Jesus Christ and make disciples
              of all nations (Matthew 24:14).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ECCA is an evangelical church that follows the teachings of the whole Bible. We do mission work
              and preach the good news of the Kingdom of God and the saving grace of our Lord and Savior
              Jesus Christ to all nations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This church was founded to lead evangelism and church planting across the nations of the world,
              beginning from Kenya in Africa. ECCA was registered in Kenya under Section 10 of the Societies
              Act in 2003. It is fully recognized by the Government of Kenya.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-olive-dark mb-6">What We Believe</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are a group of Pentecostal, Spirit-baptized believers from local churches of the same
                faith around the world.
              </p>
              <p>
                We believe it is God&apos;s purpose to call out of the world a saved people. These people make
                up the body or church of Jesus Christ. This church is built on the foundation of the apostles
                and prophets, with Jesus Christ as the chief cornerstone.
              </p>
              <p>
                As members of this body, we come together for worship, fellowship, counsel, and teaching of
                God&apos;s Word. We also come together for ministry and to practice the spiritual gifts that
                the New Testament provides for the church.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-bold text-olive-dark mb-6">Our Faith Statement</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ECCA fully accepts the revelation of God as written in the Old and New Testaments of the
                Holy Bible.
              </p>
              <p>
                We believe that Jesus Christ is the Son of the living God. He came into this world in
                bodily form to die on the cross for the sins of all people. He rose from the dead in
                bodily form and went up to heaven. From there, He will come again to take all those who
                believe in Him.
              </p>
              <p>
                We believe that He poured out His Holy Spirit to be with those who belong to Him.
              </p>
              <p>
                ECCA believes in the Great Commission as stated in Matthew 28:16-20.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
