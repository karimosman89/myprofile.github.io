import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Icons for social links

const Contact = () => (
  <>
    <Head>
      <title>Contact - Karim Osman</title>
      <meta name="description" content="Get in touch with Karim Osman." />
    </Head>

    <div className="max-w-4xl mx-auto p-6 text-gray-300">
      <Header />

      <h1 className="text-4xl font-bold mt-10 text-center">🌍 Let's Connect</h1>
      
      <p className="mt-4 text-center">
        I am passionate about data and technology and eager to engage in meaningful conversations 
        about innovative projects, ideas, and opportunities. Please feel free to connect with me through the following platforms:
      </p>

      {/* Contact Methods Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-x-0 md:space-x-6">
        {/* LinkedIn */}
        <a 
          className="flex items-center bg-gray-800 text-gray-300 rounded-md shadow-md p-4 transition-transform transform hover:scale-105"
          href="https://linkedin.com/in/karimosman89" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="mr-2 text-3xl" /> {/* Increased icon size */}
          LinkedIn
        </a>

        {/* Email */}
        <a 
          className="flex items-center bg-gray-800 text-gray-300 rounded-md shadow-md p-4 transition-transform transform hover:scale-105 mt-4 md:mt-0"
          href="mailto:karim.programmer2020@gmail.com"
        >
          <FaEnvelope className="mr-2 text-3xl" /> {/* Increased icon size */}
          Email
        </a>

        {/* GitHub */}
        <a 
          className="flex items-center bg-gray-800 text-gray-300 rounded-md shadow-md p-4 transition-transform transform hover:scale-105 mt-4 md:mt-0"
          href="https://github.com/karimosman89"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2 text-3xl" /> {/* Increased icon size */}
          GitHub
        </a>
      </div>

      {/* Additional Section: Call to Action */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">I'm Open to Opportunities!</h2>
        <p>
          If you're interested in collaborating on projects or discussing new opportunities, 
          don't hesitate to reach out. I look forward to connecting with like-minded professionals!
        </p>
      </section>

      {/* Testimonial Section (Optional) */}
      <section className="mt-10 bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-center">What Others Say</h2>
        <p className="text-center italic">
          "Karim is an exceptional data scientist who brings innovative solutions to every project." 
          - A former colleague
        </p>
      </section>

      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  </>
);

export default Contact;
