import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface Props {
  selectedcampingvolume: number;
  selectedhealthvolume: number;
  selectedbikerelatedvolume: number;
  selectedelectronicsvolume: number;
  selectedeldocumentsvolume: number;
  selectedropavolume: number;
}

const PieChartComponentvolume: React.FC<Props> = ({
  selectedcampingvolume,
  selectedhealthvolume,
  selectedbikerelatedvolume,
  selectedelectronicsvolume,
  selectedeldocumentsvolume,
  selectedropavolume,
}) => {
  const data = [
    { name: "Camping Volume", value: selectedcampingvolume },
    { name: "Health Body Care Volume", value: selectedhealthvolume },
    { name: "Bike Related Equipment Volume", value: selectedbikerelatedvolume },
    { name: "Electronics Volume", value: selectedelectronicsvolume },
    { name: "Documents Volume", value: selectedeldocumentsvolume },
    { name: "Clothing Volume", value: selectedropavolume },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#82C1F7"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponentvolume;