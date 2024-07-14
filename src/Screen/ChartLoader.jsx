import React from 'react';
import ContentLoader from 'react-content-loader';

const ChartLoader = (props) => (
  <ContentLoader
    rtl
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 500 500"
    backgroundColor="#b1d6ed"
    foregroundColor="#ffffff"
    {...props}>
    <circle cx="250" cy="250" r="250" />
  </ContentLoader>
);

const BarChart = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={200}
    viewBox="0 0 800 300"
    backgroundColor="#b1d6ed"
    foregroundColor="#ffb6c1"
    {...props}>
    <rect x="0" y="80" rx="4" ry="4" width="50" height="220" />
    <rect x="60" y="40" rx="4" ry="4" width="50" height="260" />
    <rect x="120" y="120" rx="4" ry="4" width="50" height="180" />
    <rect x="180" y="80" rx="4" ry="4" width="50" height="220" />
    <rect x="240" y="160" rx="4" ry="4" width="50" height="140" />
    <rect x="300" y="100" rx="4" ry="4" width="50" height="200" />
    <rect x="360" y="180" rx="4" ry="4" width="50" height="120" />
    <rect x="420" y="220" rx="4" ry="4" width="50" height="80" />
    <rect x="480" y="80" rx="4" ry="4" width="50" height="220" />
    <rect x="540" y="160" rx="4" ry="4" width="50" height="140" />
    <rect x="600" y="100" rx="4" ry="4" width="50" height="200" />
    <rect x="660" y="180" rx="4" ry="4" width="50" height="120" />
    <rect x="720" y="220" rx="4" ry="4" width="50" height="80" />
  </ContentLoader>
);

const ChartLoaders = {
  ChartLoader,
  BarChart
};

export default ChartLoaders;