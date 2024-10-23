import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Head>
      <title>About Me - Karim Osman</title>
      <meta name="description" content="Learn more about Karim Osman, a Machine Learning Engineer." />
    </Head>

    <div className="max-w-4xl mx-auto p-6 text-gray-300">
      <Header />
      <h1 className="text-4xl font-bold mt-10">👋 Welcome to My Portfolio!</h1>
      <p className="mt-4">
        I’m <strong>Karim Osman</strong>, a passionate <strong>Machine Learning Engineer</strong> and <strong>Data Enthusiast</strong> dedicated to transforming data into actionable insights. My journey in the world of technology began with a fascination for data's potential to shape the future, and today, I leverage cutting-edge algorithms to develop innovative solutions that drive impact across various industries.
      </p>

      <h2 className="text-3xl font-semibold mt-6">🚀 What I Do</h2>
      <p className="mt-2">
        As a specialist in <strong>Artificial Intelligence</strong> and <strong>Data Engineering</strong>, I focus on building <strong>scalable solutions</strong> that harness the power of machine learning and data analytics. My work encompasses a wide range of applications, including:
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>🔍 <strong>Deep Learning:</strong> Creating advanced models for <strong>Natural Language Processing</strong> and <strong>Computer Vision</strong>.</li>
        <li>📊 <strong>Data Pipeline Development:</strong> Designing robust ETL processes to ensure data quality and accessibility.</li>
        <li>🔗 <strong>AI Research:</strong> Staying ahead of trends in <strong>Reinforcement Learning</strong> and exploring the latest advancements in <strong>AI technologies</strong>.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6">🌟 Why Work With Me?</h2>
      <p className="mt-2">
        I believe that collaboration fuels innovation. Here’s what I bring to the table:
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>🤝 <strong>Collaborative Spirit:</strong> I thrive in team environments and value diverse perspectives, enabling us to tackle challenges creatively.</li>
        <li>💡 <strong>Innovative Mindset:</strong> My commitment to continuous learning allows me to adopt the latest technologies and methodologies to solve complex problems.</li>
        <li>📈 <strong>Results-Driven Approach:</strong> I focus on delivering tangible outcomes, using data to inform decisions and measure success.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6">🌐 Let’s Connect!</h2>
      <p className="mt-2">
        I’m always open to new opportunities and collaborations. Whether you’re looking to partner on an exciting project or discuss the latest trends in AI, feel free to reach out! Together, we can create solutions that not only meet business needs but also push the boundaries of what’s possible.
      </p>

      <Footer />
    </div>
  </>
);

export default About;
