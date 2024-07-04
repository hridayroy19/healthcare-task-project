import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" mt-12 bg-[#020043] text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div>
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
              <div className="col-span-2 sm:col-span-1">
                <img
                  src="https://i.ibb.co/FwMRn1n/logo-light.png"
                  className=" "
                  alt=""
                />

                <div className="mt-6 space-y-4 text-sm">
                  <p>123 Main Street Anytown, USA Postal Code: 12345</p>
                  <p className=" mt-5 ">
                    Support: support@oyolloo.com (Available : 10:00am to
                    07:00pm)
                  </p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium"> Home</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>About us</li>

                  <li>Success Page</li>

                  <li>Terms and condition</li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium ">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>Scheduling</li>

                  <li>Contact Us</li>

                  <li>Patient Portal</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium ">Downloads</p>

                <div className="mt-6   space-y-4 text-sm">
                  <div className="flex items-center gap-4 text-2xl">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaWhatsapp />
                  </div>
                  <p className=" mt-4">@docplus 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
