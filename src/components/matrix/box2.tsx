import BoxGrid2 from "./boxprop2";

const boxData = [
    {
      text: 'Injuries',
      link: '/knowledge/Injuries',
    },
    {
      text: 'Bike Mechanics',
      link: '/knowledge/bikemechanics',
    },
    {
      text: 'Biomechanics',
      link: '/knowledge/biomechanics',
    },
    {
      text: 'Training',
      link: '/knowledge/training',
    },
    {
      text: 'Nutrition',
      link: '/knowledge/nutrition',
    },
    {
      text: 'Accidents and Prevention',
      link: '/knowledge/accidentsandprevention',
    }
  ];
  
  const Box2 = () => {
    return <BoxGrid2 boxData={boxData} />;
  };    
  export default Box2;