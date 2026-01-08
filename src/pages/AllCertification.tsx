import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AllCertifications = () => {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const certifications = [
    {
      image: "/certifications/freecodecamp-responsive.png",
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      credentialId: "12345",
      credentialLink:
        "https://www.freecodecamp.org/certification/your-id/responsive-web-design",
    },
    {
      image: "/certifications/google-it-support.png",
      title: "Google IT Support Specialization",
      issuer: "Coursera",
      credentialId: "ABCDEF123",
      credentialLink: "https://coursera.org/verify/ABCDEF123",
    },
    {
      image: "/certifications/aws-cloud.png",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      credentialId: "AWS-123456",
      credentialLink: "https://aws.amazon.com/verification",
    },
    // Add more here...
  ];

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Esther</span>
            </div>
          </div>
        </div>
      </header>

      {/* Certifications Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">
              ~ Professional Growth
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              All My <span className="text-orange-500">Certifications</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A collection of certifications I’ve earned across different fields
              of technology and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute top-4 right-4 w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-900 transition-colors cursor-pointer"
                    onClick={() => handleCertClick(cert)}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="text-sm text-gray-500">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details Modal */}
      <Dialog
        open={selectedCert !== null}
        onOpenChange={() => setSelectedCert(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-green-800">
                  {selectedCert.title}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <p>
                    <span className="font-semibold">Issuer:</span>{" "}
                    {selectedCert.issuer}
                  </p>
                  {selectedCert.credentialId && (
                    <p>
                      <span className="font-semibold">Credential ID:</span>{" "}
                      {selectedCert.credentialId}
                    </p>
                  )}
                  <Button
                    onClick={() =>
                      window.open(selectedCert.credentialLink, "_blank")
                    }
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    View Credential
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllCertifications;
