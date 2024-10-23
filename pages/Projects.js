// pages/projects.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <>
    <Head>
      <title>Projects - Karim Osman</title>
      <meta name="description" content="Explore my notable projects as a Machine Learning Engineer." />
    </Head>

    <div className="max-w-7xl mx-auto p-6 text-gray-300">
      <Header />

      <h1 className="text-4xl font-bold mt-10 text-center">🏆 Notable Projects</h1>
      <p className="mt-4 text-center text-gray-400">
        Explore some of the projects I've worked on, demonstrating my skills in Machine Learning, AI, and Data Engineering.
      </p>

      {/* Projects Grid */}
      <div className="projects-grid mt-8">
        <ProjectCard
          title="NLP with Transformers"
          description="Developed advanced text classification models utilizing BERT for sentiment analysis and topic classification."
          link="https://github.com/karimosman89/NLP-with-Transformers"
          image="/images/background5.jpg" // Specific image for this project
        />
        <ProjectCard
          title="Time Series Forecasting"
          description="Designed robust forecasting models employing LSTM, ARIMA, and Prophet to predict stock prices."
          link="https://github.com/karimosman89/time-series"
          image="/images/background9.jpg" // Specific image for this project
        />
        <ProjectCard
          title="End-to-End ML Pipeline on AWS"
          description="Engineered a scalable ML pipeline for customer churn prediction utilizing AWS services and CI/CD methodologies."
          link="https://github.com/karimosman89/ML-Pipeline-AWS"
          image="/images/background10.jpg" // Specific image for this project
        />
        <ProjectCard
          title="Real-Time Data Pipeline"
          description="Architected a high-performance ETL pipeline for processing streaming log data using Apache Kafka and Spark."
          link="https://github.com/karimosman89/Data-Pipeline"
          image="/images/background15.jpg" // Specific image for this project
        />
      </div>

      <Footer />
    </div>
  </>
);

export default Projects;
