import Slider from "react-slick";
// import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1
  };
  return (
    <div className="w-3/4 m-auto">
 <div className="mt-20">
  <Slider {...settings}>
{data.map((d)=>(
  <div className="bg-white h-[300px] text-black rounded-xl hover: border-2 border-gray-500">

    <div className="flex flex-col justify-center items-center gap-4  p-4 ">
    <p className="text-xl font-57 font-extrabold  border-2 bg-blue-400 -mt-2">{d.about}</p>
      <p className='text-xl font-semibold '>{d.name}</p>
      <p className='text-xl font-semibold'>{d.age}</p>
      <p className='text-xl font-semibold'>{d.blood_Group}</p>
      <p className='text-xl font-semibold'>{d.weight}</p>
      <p className='text-xl font-semibold'>{d.height}</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4 p-2 ">
    <p className="text-xl font-57 font-extrabold -mt-16 border-2 bg-blue-400 ">{d.da}</p>
      <p className='text-xl font-semibold '>{d.d1}</p>
      <p className='text-xl font-semibold'>{d.d2}</p>
      <p className='text-xl font-semibold'>{d.d3}</p>
      <p className='text-xl font-semibold'>{d.d4}</p>
      <p className='text-xl font-semibold'>{d.d5}</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4 p-2 ">
    <p className="text-xl font-57 font-extrabold border-2 bg-blue-400 -mt-16">{d.cda}</p>
      <p className='text-xl font-semibold '>{d.cd1}</p>
    <p className='text-xl font-semibold'>{d.cd2}</p>
      <p className='text-xl font-semibold'>{d.cd3}</p>
      <p className='text-xl font-semibold'>{d.cd4}</p>
      <p className='text-xl font-semibold'>{d.cd5}</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-4  p-3 ">
    <p className=" relative text-xl font-57 font-extrabold border-2 bg-blue-400 -mt-16  ">{d.sa}</p>
    
      <p className='text-xl font-semibold'>{d.s1}</p>
      <p className='text-xl font-semibold'>{d.s2}</p>
      <p className='text-xl font-semibold'>{d.s3}</p>
      <p className='text-xl font-semibold'>{d.s4}</p>
      <p className='text-xl font-semibold'>{d.s5}</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-6 p-4 ">
    <p className="text-xl font-57 font-extrabold border-2 bg-blue-400 -mt-16">{d.aa}</p>
    <p className='text-xl font-semibold'>{d.a1}</p>
      <p className='text-xl font-semibold'>{d.a2}</p>
      </div>
   </div>

))}
</Slider>
 </div></div>
  
  );
}

export default App;

const data=[

  {
    about:"ABOUT",
    name:'Aditya Sharma',
    age:'24',
    blood_Group:'A',
    weight:'56',
    height:'170cm'

  },

  {
    da:'Chronic Diseases',
  d1:'disease1',
  d2:'disease2',
  d3:'disease3',
  d4:'disease4',
  d5:'disease5'
  },

  {
    cda:'PAST ILLNESS',
    cd1:'current-disease1',
    cd2:'current-disease2',
    cd3:'current-disease3',
    cd4:'current-disease4',
    cd5:'current-disease5'
  },

  {
    sa:'SURGERIES',
    s1:'surgery1',
    s2:'surgery2',
    s3:'surgery3',
    s4:'surgery4'
  },

  {
    aa:'ALLERGIES',
    a1:'allergies1',
    a2:'allergies2'

  }



]

