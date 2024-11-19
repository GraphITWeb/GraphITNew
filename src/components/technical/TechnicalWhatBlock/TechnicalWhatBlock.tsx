'use client'
import React, {useState} from "react";
import './TechincalWhatBlocks.css'
interface TechnicalWhatBlockProps {
    header: string;
    description: string;
}
const TechnicalWhatBlock: React.FC<TechnicalWhatBlockProps> = ({header,description}) => {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="technical__what__block">
          <div className="technical__what__block__header">
              <h4>{header}</h4>
              {!isOpen&&<svg style={{cursor:"pointer"}} onClick={()=>setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="white"/>
              </svg>}
              {isOpen &&
                  <svg onClick={()=>setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_1242_14090)">
                          <mask id="mask0_1242_14090" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="24">
                              <rect width="24" height="24" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_1242_14090)">
                              <path d="M5 13V11H19V13H5Z" fill="white"/>
                          </g>
                      </g>
                      <defs>
                          <clipPath id="clip0_1242_14090">
                              <rect width="24" height="24" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>}
          </div>
          {isOpen && <p>{description}</p>}
      </div>
    )
}
export default TechnicalWhatBlock;