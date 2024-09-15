import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function EVBarChart({ data }) {
  const formattedData = data.map(item => ({
    year: item.Year,
    population: parseInt(item.EVPopulation, 10),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="population" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EVBarChart;
