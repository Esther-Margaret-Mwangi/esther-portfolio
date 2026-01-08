import React from "react";

const Certifications = () => {
  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      period: "Issued Jul 2022",
      credentialId: "",
      url: "https://www.freecodecamp.org/certification/username/responsive-web-design",
      skills: "HTML",
    },
    {
      name: "IT Security: Defense against the digital dark arts",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "EA32QLBSUHAV",
      url: "https://coursera.org/verify/EA32QLBSUHAV",
    },
    {
      name: "Operating Systems and You: Becoming a Power User",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "PATBN26M7V4A",
      url: "https://coursera.org/verify/PATBN26M7V4A",
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "SAZ92E72KS4F",
      url: "https://coursera.org/verify/SAZ92E72KS4F",
      skills: "Networking",
    },
    {
      name: "Google IT Support Specialization",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "6QM4ZV6VQEH9",
      url: "https://coursera.org/verify/6QM4ZV6VQEH9",
      skills: "Customer Service",
    },
    {
      name: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "D2W33DP4UP9T",
      url: "https://coursera.org/verify/D2W33DP4UP9T",
      skills: "Maintenance & Repair",
    },
    {
      name: "Technical Support Fundamentals",
      issuer: "Coursera",
      period: "Issued May 2022",
      credentialId: "CDGW7R7CU6VU",
      url: "https://coursera.org/verify/CDGW7R7CU6VU",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            All <span className="text-orange-500">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
              <p className="text-gray-700 font-medium mb-1">{cert.issuer}</p>
              <div className="text-orange-500 font-medium mb-2">
                {cert.period}
              </div>
              {cert.credentialId && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Credential ID:</span>{" "}
                  {cert.credentialId}
                </p>
              )}
              {cert.skills && (
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Skills:</span> {cert.skills}
                </p>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-orange-500 font-medium hover:underline"
                >
                  Show Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
