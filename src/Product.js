import React from 'react'
import aboutimg from "./assets/Group2.png";
import mauthn from "./assets/mauthn.png";

function Product() {
    return (
      <div>
        <div className="section about-bg">
          <h1 style={{ textAlign: "center" }}>Product</h1>
        </div>
        <div className="section fdc">
          <div className="about_page_content">
            <div className="about_page_left">
              <h3>Mukham App</h3>
              <p style={{ marginLeft: "0" }}>
                The application is integrated with Assistant to remind and
                process the flow. It consists of a complete simplified UI which
                takes less than 10 seconds to mark attendance. In addition to
                this it has a magnificent Complete Customized dashboards to take
                attendance reports. This indeed makes it easier both for the
                student as well as the educational institute, employee and the
                company. This can be enhanced to support and monitor the
                employees who are working on fields/on sites.
              </p>
            </div>
            <div className="about_page_right">
              <img src={aboutimg} alt="startup llustration" />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <div className="about_page_content fdcm700">
            <div className="about_page_right">
              <img src={mauthn} alt="startup llustration" />
            </div>
            <div className="about_page_left">
              <h3>MauthN</h3>
              <p style={{ marginLeft: "0" }}>
                Remote multimodal authentication provides flexibility of using
                any device for authentication with the security of multimodal
                and multifactor authn. It allows the user to use one or the
                combination of various passwordless authentication factors like
                biometrics, facial recognition, device attestation, smart cards
                to keyfobs and with the flexibility of using from any smartphone
                device. It allows the user to securely authenticate to any
                online platform, removing the risks of spoofing, replay attacks
                and other known cyberattacks and facial perturbation.Allowing it
                to use from any smartphone enhances the ease of access and sign
                on experience of an user while maintaing the highest security
                standards.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
}

export default Product
