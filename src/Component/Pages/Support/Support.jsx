import SupportBanner from "./SupportBanner";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
export default function Support() {
  return (
    <div>
      <SupportBanner />
      <div className="min-h-screen bg-gray-100">
        {/* Contact Methods */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-start mb-8">
          {/* Contact List */}
          <div className="w-full md:w-1/3 bg-white shadow p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <FaFacebook className="text-xl" />
                  <span className="font-medium">Facebook Page</span>
                </a>
              </li>
              <li>
                <a
                  href="https://m.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:underline"
                >
                  <FaFacebookMessenger className="text-xl" />
                  <span className="font-medium">Messenger</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:underline"
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </li>
              <li>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-xl" />
                  <span className="font-medium">Phone:</span> +123-456-7890
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-xl" />
                  <span className="font-medium">Email:</span>{" "}
                  support@example.com
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-white shadow p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
