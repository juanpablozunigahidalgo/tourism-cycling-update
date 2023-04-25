import BoxGrid from "./boxprop";

const boxData = [
    {
      text: 'Box 1',
      link: '/box1',
    },
    {
      text: 'Box 2',
      link: '/box2',
    },
    {
      text: 'Box 3',
      link: '/box3',
    },
    {
      text: 'Box 4',
      link: '/box4',
    },
    {
      text: 'Box 5',
      link: '/box5',
    },
    {
      text: 'Box 6',
      link: '/box6',
    },
  ];
  
  const Box1 = () => {
    return <BoxGrid boxData={boxData} />;
  };    
  export default Box1;