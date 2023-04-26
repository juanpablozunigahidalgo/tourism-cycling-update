import BoxGrid from "./boxprop";

const boxData = [
    {
      text: 'Route & Cost Calculator',
      link: '/route',
    },
    {
      text: 'Equipment Calculator',
      link: '/equipment',
    },
    {
      text: 'Preparation',
      link: '/preparation',
    },
    {
      text: 'Bike Check',
      link: '/bikecheck',
    },
    {
      text: 'Knowledge',
      link: '/knowledge',
    },
    {
      text: 'Recomended Apps',
      link: '/recomendedapps',
    }
  ];
  
  const Box1 = () => {
    return <BoxGrid boxData={boxData} />;
  };    
  export default Box1;