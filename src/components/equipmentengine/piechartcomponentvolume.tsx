import React from "react";
import { PieChart, Pie, Cell } from "recharts";

interface Props {
  selectedcampingvolume: number;
  selectedhealthvolume: number;
  selectedbikerelatedvolume:number;
  selectedelectronicsvolume:number;
  selectedeldocumentsvolume:number;
  selectedropavolume: number;

}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const PieChartComponentvolume: React.FC<Props> = ({
  selectedcampingvolume,
  selectedhealthvolume,
  selectedbikerelatedvolume,
  selectedelectronicsvolume,
  selectedeldocumentsvolume,
  selectedropavolume
}) => {
  const data = [
    { name: "Camping Volume", value: selectedcampingvolume },
    { name: "Health Body Care Volume", value: selectedhealthvolume },
    { name: "Bike Related Equipment Volume", value: selectedbikerelatedvolume },
    { name: "Electronics Volume", value: selectedelectronicsvolume },
    { name: "Documents Volume", value: selectedeldocumentsvolume },
    { name: "Clothing Volume", value: selectedropavolume },
  ];

  // Check if any input variable is null or 0
  const shouldRender = selectedcampingvolume && selectedhealthvolume && selectedbikerelatedvolume && selectedelectronicsvolume && selectedeldocumentsvolume && selectedropavolume;

  return shouldRender ? (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  ) : null;
};

export default PieChartComponentvolume;



// const [selectedcampingvolume, setSelectedcampingvolume] = useState<number>(0);

//   const [selectedhealthvolume, setSelectedhealthvolume] = useState<number>(0);

//   const [selectedbikerelatedvolume, setSelectedbikerelatedvolume] = useState<number>(0);

//   const [selectedelectronicsvolume, setSelectedelectronicsvolume] = useState<number>(0);

//   const [selectedeldocumentsvolume, setSelecteddocumentsvolume] = useState<number>(0);

//   const [selectedropavolume, setSelectedropavolume] = useState<number>(0);
