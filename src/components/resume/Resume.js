import React, { useState } from "react";
import Title from "../layouts/Title";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";




const Resume = () => {

    const [educationData, setEducationData] = useState (true);
    const [skillData, setSkillData] = useState (false);
    const [experienceData, setExperienceData] = useState (false);
    const [achievmantData, setAchievmantData] = useState (false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      Resume
      <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li onClick={() => 
            setEducationData(true) &
            setSkillData(false) &
            setExperienceData(false) &
            setAchievmantData(false)
            } 
            className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}> Ecucation
          </li>

          <li onClick={() => 
            setEducationData(false) &
            setSkillData(true) &
            setExperienceData(false) &
            setAchievmantData(false)
            } 
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills
            </li>

          <li onClick={() => 
            setEducationData(false) &
            setSkillData(false) &
            setExperienceData(true) &
            setAchievmantData(false)
            }  
            className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Experience
            </li>

          <li onClick={() => 
            setEducationData(false) &
            setSkillData(false) &
            setExperienceData(false) &
            setAchievmantData(true)
            }
            className={`${achievmantData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievments
            </li>
        </ul>
      </div>
      {
        educationData && <Education />
      }
      {
        skillData && <Skills />
      }
      {
        experienceData && <Experience />
      }
      {
        achievmantData && <Achievements />
      }
      
      {/* <Skills/>
      <Achievements />
      <Experience /> */}
  
    </section>
  );
};

export default Resume;
