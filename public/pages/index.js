import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Lottie from 'lottie-react'; // Import Lottie
import machineLearningAnimation from '/animations/machine-learning.json'; // Adjust paths as necessary
import dataEngineerAnimation from '/animations/data-engineer.json';
import dataAnalysis from '/animations/data-analyisis.json';
import dataScienceAnimation from '/animations/data-science.json';
import aiAnimation from '/animations/ai.json';
import aiEngineeringAnimation from '/animations/ai-engineering.json';
import deepLearningAnimation from '/animations/deep-learning.json';
import devOpsAnimation from '/animations/devops.json';
import ThreeDDiagrams from '../components/ThreeDDiagrams';

const Home = () => (
  <>
    <Head>
      <title>Karim Osman - Machine Learning Engineer</title>
      <meta name="description" content="Karim Osman - Portfolio of a Machine Learning Engineer." />
    </Head>

    <div className="max-w-5xl mx-auto p-6 text-gray-300">
      {/* Header Component */}
      <Header />
      {/* Hero Section */}
      <section className="text-center mt-10">
        {/* Name with Typing Animation */}
        <img
          src="https://readme-typing-svg.demolab.com?font=Georgia&size=32&duration=2000&pause=100&color=F1C40F&lines=Karim+Osman"
          alt="Typing SVG - Karim Osman"
          className="mx-auto"
        />
      {/* Welcome Section */}
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Welcome to My Portfolio!</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          I’m a <strong>Machine Learning Engineer</strong> focused on building 
          models and algorithms that solve real-world problems. My work involves 
          developing state-of-the-art deep learning solutions for various industries.
        </p>
      </section>

      

        {/* Professional Titles with Typing Animation and Animations */}
        <div className="title-animation-container">
          {/* Machine Learning Engineer */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=37BCF6&lines=Machine+Learning+Engineer"
              alt="Typing SVG - Machine Learning Engineer"
              className="position-name"
            />
            <Lottie animationData={dataAnalysis} className="lottie-animation" />
          </div>

          {/* Data Engineer */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=E74C3C&lines=Data+Engineer"
              alt="Typing SVG - Data Engineer"
              className="position-name"
            />
            <Lottie animationData={dataEngineerAnimation} className="lottie-animation" />
          </div>

          {/* Data Scientist */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=9B59B6&lines=Data+Scientist"
              alt="Typing SVG - Data Scientist"
              className="position-name"
            />
            <Lottie animationData={aiEngineeringAnimation} className="lottie-animation" />
          </div>

          {/* AI Engineer */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=2ECC71&lines=AI+Engineer"
              alt="Typing SVG - AI Engineer"
              className="position-name"
            />
            <Lottie animationData={aiAnimation} className="lottie-animation" />
          </div>

          {/* Deep Learning Engineering */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=3498DB&lines=Deep+Learning+Engineering"
              alt="Typing SVG - Deep Learning Engineering"
              className="position-name"
            />
            <Lottie animationData={dataScienceAnimation} className="lottie-animation" />
          </div>

          {/* DevOps */}
          <div className="title-animation-item">
            <img
              src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&color=F39C12&lines=DevOps"
              alt="Typing SVG - DevOps"
              className="position-name"
            />
            <Lottie animationData={machineLearningAnimation} className="lottie-animation" />
          </div>
        </div>

        {/* Profile Photo Section */}
        <div className="flex justify-center mt-8">
          <div className="profile-photo-wrapper">
            <img
              src="/profile-photo.jpg" // Your profile photo path here
              alt="Profile Photo of Karim Osman"
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      {/* Roles and Examples Section */}
   <section className="mt-10">
  <h2 className="text-3xl font-bold text-gray-100 text-center mb-6">Role Examples</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
      <ThreeDDiagrams />
    </div>
  
</section>


      {/* Footer Component */}
      <Footer />
    </div>
  </>
);

export default Home;