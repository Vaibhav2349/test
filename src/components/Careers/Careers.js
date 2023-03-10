import "./Careers.css";
import React from "react";
import {Link } from 'react-router-dom'
import career from "../../images/career.jpg";
import Job from "./Job";
export default function Careers() {
  const data = [
    {
      job_description: "Software Developer Intern",
      responsibilities: [
        "Work with developers to design algorithms and flowcharts",
        "Produce clean, efficient code based on specifications",
        "Integrate software components and third-party programs",
        "Verify and deploy programs and systems",
        "Troubleshoot, debug and upgrade existing software",
        "Gather and evaluate user feedback",
        "Recommend and execute improvements",
        "Create technical documentation for reference and reporting",
      ],
      qualifications : ['Bachelor\'s degree in computer science or related degree.','Knowledge of the software development life-cycle.','The desire to work in a fast-paced environment.','Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript','Ability to work independently and multi-task effectively','Flexible and willing to accept a change in priorities as necessary','Maintain and improve the performance of existing software'],
      requirement:['Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.']
    },
    {
      job_description: "Senior Technical Expert",
      responsibilities: [
        "Provide technical support for customers on usage of various computer products and its operating systems, associated common software",
        "Assist customers by diagnosing problems on hardware problems and providing resolutions for technical and service issues. Guide customers about possible solutions and options available to resolve software and applications issues including Windows, MS Office, Ubuntu etc",
        "Follow standardized policies and procedures prescribed and updated by Blitzpath.",
        "Provide right solution and demonstrate behaviour to help the customer not only on a specific query but solution at large.",
        "Respect service level agreements in mutually agreed upon schedules.",
        "Responsible for customer satisfaction through effective handling of customer problems and resolution with reduced customer effort, faster response.",
        "Smartly and efficiently handle platform designed to solve customer queries.",
        "Experience in Customer service industry",
        "Experience in handling chat based process"
      ],
      qualifications : ['Graduate and above - Technical education in computer, operating systems and its usage.',
      'Flawless English communication - English writing skills, correspondence and conversation on a chat-like-platform.',
      'Excellent soft skills will help in handling customers in distress. Ability to deal professionally with irate customers.',
      'Ability to create videos for a quick demonstration on a technical problem resolution commonly faced in PC usage.',
      'Must have experience of 3-10 years L1/L2 to support customers on technical questions or problems related to PC break-fix, hardware and software issues, including peripherals such as printers, routers etc.',
      'Microsoft certified resources will have better chances of success. A+ certified resources will be set up a great success with our customers.',
      ],
      requirement:['Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.']
    },
    
    {
      job_description: "Technical Expert",
      qualifications: [
        'Graduate and above - Technical education in computer, operating systems and its usage.',
        'Flawless English communication - English writing skills, correspondence and conversation on a chat-like-platform.',
        'Excellent soft skills will help in handling customers in distress. Ability to deal professionally with irate customers.',
        'Ability to create videos for a quick demonstration on a technical problem resolution commonly faced in PC usage.',
        'Must have experience of 1-5 years as frontline or L1 to support customers on technical questions or problems related to PC break-fix, hardware and software issues, including peripherals such as printers, routers etc.',
        'Microsoft certified resources will have better chances of success. A+ certified resources will be set up a great success with our customers.',
        'Should be willing to take assignments in a 24 x7 work environment.'
        
      ],
      responsibilities : ['Provide technical support for customers on usage of various computer products and its operating systems, associated common software',
      'Assist customers by diagnosing problems on hardware problems and providing resolutions for technical and service issues. Guide customers about possible solutions and options available to resolve software and applications issues including Windows, MS Office, Ubuntu etc',
      'Follow standardized policies and procedures prescribed and updated by Blitzpath.',
      'Provide right solution and demonstrate behaviour to help the customer not only on a specific query but solution at large.',
      
      'Respect service level agreements in mutually agreed upon schedules.',
      'Responsible for customer satisfaction through effective handling of customer problems and resolution with reduced customer effort, faster response.',
      'Smartly and efficiently handle platform designed to solve customer queries.'
      ],
      requirement:['Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.']

    }

  ];
  return (
    <div className="careercontainer">
      <div className="career_image">
        <img src={career} alt="Job Vacancies" />
      </div>
      <div className="vacancies">
        <div className="vacancies_heading">
          <h1>Job vacancies</h1>
          <hr />
        </div>
        <div className="job_container">
          { data.map((ele,index)=>{
           return(

           <div className="job" key={index}>
            <div className="job_apply">
              <div className="job_title">
                <h1>{index+1}. &nbsp; Job description : {ele.job_description}</h1>
              </div>
              <div className="apply_button">
               <Link to='/apply'><button>Apply</button></Link> 
              </div>
            </div>
            <Job title="Responsibilities" requirement = {ele.responsibilities} />
            <Job title="Qualifications"  requirement = {ele.qualifications}/>
            <Job title="Requirements"  requirement = {ele.requirement}/>
          </div>
           )
          })
          }
        </div>
      </div>
    </div>
  );
}
