import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="text-5xl font-bold text-primary mb-3">
            Welcome to SmartClient360
          </h1>
          <p className="text-gray-600 mb-4">
            Empowering businesses with cutting-edge web solutions to thrive in the digital world.
          </p>
          <a href="#features" className="btn btn-primary btn-lg">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-5">
            Our Features
          </h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-speedometer2 text-primary display-4 mb-3"></i>
                <h5 className="font-bold">High Performance</h5>
                <p className="text-gray-600">
                  Experience blazing-fast load times and seamless user experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-shield-lock text-primary display-4 mb-3"></i>
                <h5 className="font-bold">Secure Solutions</h5>
                <p className="text-gray-600">
                  Your data is protected with industry-leading security practices.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-gear text-primary display-4 mb-3"></i>
                <h5 className="font-bold">Customizable</h5>
                <p className="text-gray-600">
                  Tailored solutions to meet your unique business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="mb-4">
            Contact us today to learn how SmartClient360 can transform your business.
          </p>
          <a href="/contact" className="btn btn-light btn-lg">
            Contact Us
          </a>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-5 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-5">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-5">
            Discover the key features that make SmartClient360 the perfect choice for your business.
          </p>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary text-white rounded-circle mx-auto mb-3" style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="bi bi-speedometer2 display-5"></i>
                </div>
                <h5 className="font-bold text-lg">High Performance</h5>
                <p className="text-gray-600">
                  Experience blazing-fast load times and seamless user experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary text-white rounded-circle mx-auto mb-3" style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="bi bi-shield-lock display-5"></i>
                </div>
                <h5 className="font-bold text-lg">Secure Solutions</h5>
                <p className="text-gray-600">
                  Your data is protected with industry-leading security practices.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 border rounded shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary text-white rounded-circle mx-auto mb-3" style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="bi bi-gear display-5"></i>
                </div>
                <h5 className="font-bold text-lg">Customizable</h5>
                <p className="text-gray-600">
                  Tailored solutions to meet your unique business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;