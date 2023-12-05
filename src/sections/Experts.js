import React from 'react'
import HeaderSecondary from '../components/HeaderSecondary'
import HeaderTertiary from '../components/HeaderTertiary'
import ExpertsCards from '../components/ExpertsCards';
// import expert_img_3 from '../Asah_Images/expert_1.png'
import expert_img_2 from '../Asha_images/JET.PNG'
import expert_img_1 from '../Asha_images/LAB.PNG'

const expert_info = [{
  id:'01',
  img:expert_img_1,
  name:'Kwarteng Gideon',
  position:'Chief Operations Officer',
},
{
  id:'02',
  img:expert_img_2,
  name:'Danquah B. Victor',
  position:'CEO and Founder',
},
// {
//   id:'03',
//   img:expert_img_3,
//   name:'Maanu Emmanualla',
//   position:'Secretary',
// }]
]

function Experts() {
  return (
    <div className='experts'
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // height:'100%'
      }}
    >
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <HeaderSecondary heading='Our Experts'></HeaderSecondary>
        <HeaderTertiary heading='Meet Our Experienced Team'></HeaderTertiary>
      </div>
      <div style={{
        width:'100vw'
      }}>
      <div className='experts-card__container' style={{
        display:'grid',
        gridTemplateColumns: 'repeat(3, 22rem)',
        gridGap:'1.5rem',
        overflowX:'auto',
        overflowY:'visible'
        // justifyContent:'space-around'
      }}>
        {
          expert_info.map((val, ind) =>{
            return <ExpertsCards key={ind} list={val}/>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Experts