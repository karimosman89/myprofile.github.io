// components/ThreeDDiagrams.js

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Plot with no SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const ThreeDDiagrams = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {/* Machine Learning Engineer - 3D Surface Plot */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          Machine Learning Engineer - Model Accuracy
        </h3>
        <Plot
          key="ml-engineer-surface" // Adding a key for this plot
          data={[
            {
              z: [
                [0.8, 0.85, 0.9],
                [0.7, 0.75, 0.8],
                [0.6, 0.65, 0.7],
              ],
              x: [1, 2, 3], // Hyperparameter 1
              y: [1, 2, 3], // Hyperparameter 2
              type: 'surface',
              colorscale: 'Viridis',
            },
          ]}
          layout={{
            title: 'Model Accuracy vs Hyperparameters',
            scene: {
              xaxis: { title: 'Hyperparameter 1' },
              yaxis: { title: 'Hyperparameter 2' },
              zaxis: { title: 'Accuracy' },
            },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
          }}
        />
      </div>

      {/* Data Engineer - 3D Bar Chart */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          Data Engineer - Data Processing Volume
        </h3>
        <Plot
          key="data-engineer-bar" // Adding a key for this plot
          data={[
            {
              x: ['APIs', 'SQL', 'NoSQL', 'Data Lakes'],
              y: [200, 400, 300, 250], // Volume of data processed
              z: [1, 1, 1, 1], // Heights for bar chart
              type: 'bar3d',
              marker: { color: 'rgb(23, 190, 207)' },
            },
          ]}
          layout={{
            title: 'Volume of Data Processed by Source',
            scene: {
              xaxis: { title: 'Data Source' },
              yaxis: { title: 'Volume (GB)' },
              zaxis: { title: 'Count' },
            },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
          }}
        />
      </div>

      {/* Data Scientist - 3D Scatter Plot */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          Data Scientist - Model Complexity vs Performance
        </h3>
        <Plot
          key="data-scientist-scatter" // Adding a key for this plot
          data={[
            {
              x: [1, 2, 3, 4, 5], // Complexity
              y: [10, 20, 30, 40, 50], // Training Time
              z: [60, 70, 80, 90, 100], // Performance Metric
              mode: 'markers+text',
              marker: {
                size: 10,
                color: 'rgb(237, 63, 63)',
              },
              type: 'scatter3d',
              text: ['Low', 'Medium', 'High', 'Very High', 'Extreme'],
              textposition: 'top center',
            },
          ]}
          layout={{
            title: 'Model Complexity vs Training Time vs Performance',
            scene: {
              xaxis: { title: 'Model Complexity' },
              yaxis: { title: 'Training Time (hrs)' },
              zaxis: { title: 'Performance (%)' },
            },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
          }}
        />
      </div>

      {/* AI Engineer - 3D Bubble Chart */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          AI Engineer - Algorithm Performance
        </h3>
        <Plot
          key="ai-engineer-bubble" // Adding a key for this plot
          data={[
            {
              x: [1, 2, 3], // Algorithm Complexity
              y: [10, 20, 30], // Execution Time
              z: [100, 200, 150], // Performance Metric
              mode: 'markers',
              marker: {
                size: [40, 60, 80], // Bubble sizes
                color: 'rgb(153, 102, 255)',
                opacity: 0.6,
              },
              type: 'scatter3d',
            },
          ]}
          layout={{
            title: 'Algorithm Complexity vs Execution Time vs Performance',
            scene: {
              xaxis: { title: 'Complexity' },
              yaxis: { title: 'Execution Time (ms)' },
              zaxis: { title: 'Performance' },
            },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
          }}
        />
      </div>

      {/* Deep Learning Engineer - 3D Line Chart */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          Deep Learning Engineer - Training Loss Over Epochs
        </h3>
        <Plot
          key="deep-learning-engineer-line"
         data={[
               {
           x: [1, 2, 3, 4, 5], // Epochs
           y: [0.6, 0.4, 0.2, 0.1, 0.05], // Training Loss
           z: [0, 0, 0, 0, 0], // Dummy z values
          mode: 'lines+markers',
          type: 'scatter3d', // or 'scatter' for 2D
         marker: { color: 'rgb(44, 160, 44)', size: 6 },
        line: { color: 'rgb(44, 160, 44)', width: 2 },
      },
    ]}
    layout={{
    title: 'Training Loss Over Epochs',
    scene: {
      xaxis: { title: 'Epochs' },
      yaxis: { title: 'Training Loss' },
      zaxis: { title: 'Count', showgrid: false, zeroline: false },
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)',
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
    width: 700,
    height: 400,
  }}
/>
      </div>

      {/* DevOps - 3D Heatmap */}
      <div className="title-animation-container">
        <h3 className="title-animation-item">
          DevOps - System Performance Over Time
        </h3>
        <Plot
          key="devops-heatmap" // Adding a key for this plot
          data={[
            {
              z: [
                [1, 2, 3],
                [2, 3, 4],
                [3, 4, 5],
              ],
              x: ['Week 1', 'Week 2', 'Week 3'], // Time
              y: ['CPU Usage', 'Memory Usage', 'Disk Usage'], // Metrics
              type: 'heatmap',
              colorscale: 'Viridis',
            },
          ]}
          layout={{
            title: 'System Performance Over Time',
            xaxis: { title: 'Time' },
            yaxis: { title: 'Metrics' },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
          }}
        />
      </div>
    </div>
  );
};

export default ThreeDDiagrams;
