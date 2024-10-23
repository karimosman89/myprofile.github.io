// pages/skills.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      {  icon: '/icons/python.svg' },
      {  icon: '/icons/R.svg' },
      {  icon: '/icons/java.svg' },
      {  icon: '/icons/CPlusPlus.svg' },
      {  icon: '/icons/csharp.svg' },
      {  icon: '/icons/Apache Groovy.svg' },
      {  icon: '/icons/sql-azure.svg' },
      {  icon: '/icons/javascript.svg' },
      {  icon: '/icons/php.svg' },
      {  icon: '/icons/bash.svg' },
      {  icon: '/icons/go.svg' },
    ],
  },
  {
    category: 'Machine Learning & Data Science Frameworks',
    skills: [
      {  icon: '/icons/scikit-learn.svg' },
      {  icon: '/icons/XGBoost.svg' },
      {  icon: '/icons/LightGBM.svg' },
      {  icon: '/icons/CatBoost.svg' },
      {  icon: '/icons/tensorflow.svg' },
      {  icon: '/icons/keras.svg' },
      {  icon: '/icons/pytorch.svg' },
      {  icon: '/icons/mxnet.svg' },
      {  icon: '/icons/coffee.svg' },
      {  icon: '/icons/pandas.svg' },
      {  icon: '/icons/numpy.svg' },
      {  icon: '/icons/SciPy.svg' },
      {  icon: '/icons/statsmodels.svg' },
      {  icon: '/icons/tableau.svg' },
      {  icon: '/icons/matplotlib.svg' },
      {  icon: '/icons/seaborn.svg' },
      {  icon: '/icons/Ploty.svg' },
      {  icon: '/icons/bokeh.svg' },
    ],
  },
  {
    category: 'Deep Learning Models',
    skills: [
      { name: 'BERT' },
      { name: 'GPT-3' },
      { name: 'LSTM' },
      { name: 'RNN' },
      { name: 'CNN' },
      { name: 'U-Net' },
      { name: 'ResNet' },
      { name: 'VGG16' },
      { name: 'EfficientNet' },
      { name: 'YOLO' },
      { name: 'GANs' },
      { name: 'VAEs' },
    ],
  },
  {
    category: 'Big Data & Cloud Technologies',
    skills: [
      {  icon: '/icons/hadoop.svg' },
      {  icon: '/icons/Apache Spark.svg' },
      {  icon: '/icons/Dask.svg' },
      {  icon: '/icons/hive.svg' },
      {  icon: '/icons/flink.svg' },
      {  icon: '/icons/apachekafka.svg' },
      {  icon: '/icons/aws.svg' },
      {  icon: '/icons/gcp.svg' },
      {  icon: '/icons/azure.svg' },
      {  icon: '/icons/Docker.svg' },
      {  icon: '/icons/kubernetes.svg' },
      {  icon: '/icons/MLflow.svg' },
      {  icon: '/icons/Apache Airflow.svg' },
      {  icon: '/icons/kubeflow.svg' },
      {  icon: '/icons/postgresql.svg' },
      {  icon: '/icons/mysql.svg' },
      {  icon: '/icons/mongodb.svg' },
      {  icon: '/icons/dbs-redis.svg' },
      {  icon: '/icons/Apache Cassandra.svg' },
      {  icon: '/icons/Redshift.svg' },
      {  icon: '/icons/bigquery.svg' },
      {  icon: '/icons/snowflake.svg' },
      {  icon: '/icons/talend.svg' },
      {  icon: '/icons/nifi.svg' },
    ],
  },
];

const Skills = () => (
  <>
    <Head>
      <title>Skills - Karim Osman</title>
      <meta name="description" content="Explore my skills and technologies as a Machine Learning Engineer." />
    </Head>

    <div className="max-w-7xl mx-auto p-6 text-gray-300">
      <Header />
      <h1 className="text-4xl font-bold mt-10 text-center">🛠️ Core Skills and Technologies</h1>

      {/* Skills Grid */}
      <div className="skills-grid mt-8">
        {skillsData.map((section, index) => (
          <div key={index} className="skill-category-card">
            <h2 className="skill-category-heading">{section.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {section.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item flex flex-col items-center">
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  </>
);

export default Skills;
