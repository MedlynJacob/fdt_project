import React, { useState } from 'react';
//import './about.css';
import '../styles/solutions.css';
import '../index.css'
import d from '../assets/dough.jpg'
import c from '../assets/connie.jpg'
import ch from '../assets/chris.jpg'
import dil from '../assets/dil.jpg'
import tex from '../assets/tex.jpg'
import usda from '../assets/usda.jpg'
import atm from '../assets/atm.jpg'
import bus from '../assets/businessMT.jpg'
import noaa from '../assets/noaa.jpg'
import lar from '../assets/Larta-logo_edited.png.webp'
import ucsb from '../assets/ucsb.jpg'
import usdaa from '../assets/usda.webp'




const About = () => {
  const [solutionsData, setSolutionsData] = useState([
    {
        id: 1,
        title: 'Douglas Bonham',
        description:
            'Doug Bonham brings thirty years of technical design experience from the Seattle technology corridor, holding positions at Microsoft, including electronic engineer, software engineer, and researcher, plus fifteen years of designing custom scientific instruments for field biologists.',
        image: d,
        flipped: false,
    },
    {
        id: 2,
        title: 'Constance Woodman',
        description:
            'Entrepreneurial Lead on an NSF I-Corps and a researcher on an NSF PFI:AIR-TT related to using computer vision to track birds, Connie utilizes her design and rapid prototyping skills to bring ideas to life. Posses a Ph.D. in Biomedical Sciences from the Texas A&M College of Veterinary Medicine and trained at the Fischer Engineering Design Center.',
        image: c,
        flipped: false,
    },
    {
        id: 3,
        title: 'Christopher Evelyn',
        description:
            'Field biologist and professor Chris has practical experience in evaluating the use of technology for imperiled species surveys for government vs. private wildlife management needs to meet the needs of both parties. With a Ph.D. from UC Santa Barbara in Evolution, Ecology, and Marine Biology, Chris has 13 publications related to species mapping and population management.',
        image: ch,
        flipped: false,
    },
]);

const handleCardClick = (id) => {
    setSolutionsData((prevState) =>
        prevState.map((solution) =>
            solution.id === id ? { ...solution, flipped: !solution.flipped } : { ...solution, flipped: false }
        )
    );
};

  return (
    <div className='bg-gray-100 flex flex-col'>
      <div className='bg-sky-400 h-[400px] rounded-[40px] '>
        {/* <img  src={logo} width={150} className=''></img> */}
        <p className='p1 mt-20 pt-10 text-[50px] font-extrabold text-black' style={{textAlign:'center'}}>GET  TO  KNOW  US</p>
      </div>
      <h3 className='mt-20 text-[40px] font-bold' style={{textAlign:'center'}}>Meet the Founders</h3>
      <br /><br /><br />

    <div className='flex flex-col'>
    <div className="solutions-container">
            <div className="solutions-grid">
                {solutionsData.map((solution) => (
                    <div
                        className={`solution-container ${solution.flipped ? 'flipped' : ''}`}
                        key={solution.id}
                        onClick={() => handleCardClick(solution.id)}
                    >
                        <div className="solution-card flex">
                            <div className="solution-front flex">
                                <img src={solution.image} alt={solution.title} className="solution-image w-full rounded-xl border-black " />
                                <h3 className="solution-title">{solution.title}</h3>
                            </div>
                            <div className="solution-back">
                                <p className="solution-description">{solution.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
      <br />


      <table className='rounded-lg bg-white ' align='center'>
        <tr>
          <td>
            <p className='cs text-[20px] mr-9 border-black'>
            <b>COMPANY STRUCTURE</b>
            </p>
          </td>
          <div className='vl'></div>
          <td width="1000px" height="350px" >
            <p className='comp text-[18px]'>
              Field Data Technologies (FDT) is a Montana 501(c)3 not-for-profit organization. FDT supports academic research, development and use of wireless smart devices. FDT develops and promotes technologies that detect, measure and analyze natural events in the field and transmit results to scientists, producers, students and educators. Field Data Services is a Montana (FDS) is for-profit business. FDS focuses on creating land manager solutions and turn-key consulting to enable land management decisions and choices for business owners.Where FDT works to create open-source, non-profit, and academic partnerships, FDS focuses on business solutions and management data. The two sister companies allow us the most flexibility when going between academic research and business services spaces.
            </p>
          </td>
        </tr>
      </table>
      <br />
     

      {/* <div className='supp'>
        <br />
        <h2 style={{textAlign:'center', font:'caption', fontSize:'30px'}}>
          Our Supporters
        </h2>
        <table align='center'>
          <tr>
            <td>
              <img src={atm} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={bus} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={noaa} alt="" className='s'/>
            </td>
          </tr>
          <br /><br />
          <tr>
            <td>
              <img src={lar} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={ucsb} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={usdaa} alt="" className='s'/>
            </td>
          </tr>
        </table>
      </div> */}

      <br />

      
      {/* <table align='center'>
        <tr>
          <th colSpan={3}>
            <p className='mc'>
              Media Coverage
            </p>
          </th>
        </tr>
        <tr>
          <td align='center'>
            <a href='https://dailyinterlake.com/news/2022/sep/25/reimagined-trail-cameras-capture-tiny-effo/'>
              <p className='link'>
                Daily Interlake “Reimagined trail cameras capture tiny creatures to boost scientific research”
              </p>
            </a>
          </td>
          <td align='center'>
            <a href='https://content.govdelivery.com/accounts/USDAFARMERS/bulletins/31c2a65'>
              <p className='link'>
                USDA News Bulletin “Success Spotlight: Monitoring Wildlife, Empowering Producers in Texas”
              </p>  
            </a>
          </td>
          <td align='center'>
            <a href='https://vetmed.tamu.edu/news/press-releases/texas-am-research-team-receives-usda-grant-to-develop-innovative-wildlife-monitoring-system/'>
              <p className='link'>
                Texas A&M press release: “USDA grant to develop innovative wildlife monitoring system”
              </p>
            </a>
          </td>
        </tr>
        <tr>
          <td align='center'>
            <a href='https://dailyinterlake.com/news/2022/sep/25/reimagined-trail-cameras-capture-tiny-effo/' >
              <img src={dil} alt="" className='pic'/>
            </a>
          </td>
          <td align='center'>
            <a href='https://content.govdelivery.com/accounts/USDAFARMERS/bulletins/31c2a65'>
              <img src={usda} alt="" className='ps'/>
            </a>
          </td>
          <td align='center'>
            <a href='https://vetmed.tamu.edu/news/press-releases/texas-am-research-team-receives-usda-grant-to-develop-innovative-wildlife-monitoring-system/'>
              <img src={tex} alt="" className='ps'/>
            </a>
          </td>
        </tr>
      </table> */}

      


      <div className='bkg'>
        <div className="flex flex-col gap-9">  <h2 className="font-semibold block mb-10" style={{textAlign:'center',  fontSize:'30px'}}>
          Media Coverage
        </h2>
        <div className='media flex flex-row  '>
       
       {/* <div className='grid'>
         <a href="https://dailyinterlake.com/news/2022/sep/25/reimagined-trail-cameras-capture-tiny-effo/">
           <img src={dil} alt="" className='pic'/>
           <p>
             Daily Interlake “Reimagined trail cameras capture tiny creatures to boost scientific research”
           </p>
         </a>
       </div>

       <div >
         <a href="https://dailyinterlake.com/news/2022/sep/25/reimagined-trail-cameras-capture-tiny-effo/">
           <img src={dil} alt="" className='pic'/>
           <p>
             Daily Interlake “Reimagined trail cameras capture tiny creatures to boost scientific research”
           </p>
         </a>
       </div> */}
       <div id = "leftbox" className="pl-[100px]">
         <a href="https://dailyinterlake.com/news/2022/sep/25/reimagined-trail-cameras-capture-tiny-effo/">
           <img src={dil} alt="" className='ps'/>
           {/* <br /><br /><br /><br /> */}
           <p className="pt-9 max-w-[500px]">
             Daily Interlake “Reimagined trail cameras capture tiny creatures to boost scientific research”
           </p>
         </a>
       </div>
       <div id = "middlebox">
         <a href="https://content.govdelivery.com/accounts/USDAFARMERS/bulletins/31c2a65">
           <img src={usda} alt="" className='ps mb-8'/>
           <p className=""  >
           USDA News Bulletin “Success Spotlight: Monitoring Wildlife, Empowering Producers in Texas”
           </p>
         </a>
       </div>
       <div id = "rightbox">
         <a href="https://vetmed.tamu.edu/news/press-releases/texas-am-research-team-receives-usda-grant-to-develop-innovative-wildlife-monitoring-system/">
           <img src={tex} alt="" className='ps mb-8'/>
           <p >
             Texas A&M press release: “USDA grant to develop innovative wildlife monitoring system”
           </p>
         </a>
       </div>
     
     
     </div>
        </div>
     
      <br />
      <br />
      </div>



      <div className='supp  flex flex-col align-center ml-20'>
      <p className='text-[28px] font-bold text-center mb-9'>
                Our Supporters
              </p>
        <br />
        {/* <h2 style={{ font:'caption', fontSize:'30px'}}>
          Our Supporters
        </h2> */}
        <table align='center'>
          <tr>
            <td>
              <hr className='wl'/>
            </td>
            <td>
            
            </td>
            <td>
              <hr className='wl'/>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              <img src={atm} alt="" className='s '/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={bus} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={noaa} alt="" className='s'/>
            </td>
          </tr>
          <br /><br />
          <tr>
            <td>
              <img src={lar} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={ucsb} alt="" className='s'/>
            </td>
            <div className='vl1'></div>
            <td>
              <img src={usdaa} alt="" className='s'/>
            </td>
          </tr>
        </table>
      </div>
      <div>
    
      </div>
      



    </div>
  )
}

export default About