import './CareersBlock.css';
import React from "react";
import Image from "next/image";
import flagImage from '../../../assets/elements/british.png'
interface CareersBlockProps{
    position: string;
    direction: string;
    country:string;
    description:string;
    time:string;
    salary:string;
    setActiveCareers:() => void;
}
const CareersBlock: React.FC<CareersBlockProps>  = ({position,direction,country,description,time,salary,setActiveCareers}) => {
  return(<>
          <div className="careers__block" onClick={setActiveCareers}>
              <div className="careers__block__header">
                  <div className="careers__block__header__first">
                      <h5>
                          {position}
                      </h5>
                      <small className="flag pc"
                             style={direction==='Engineering'?{color: 'var(--white)',
                                 borderRadius:  100,
                                 border: '1px solid rgba(242, 55, 4, 0.30)',
                                 background: 'rgba(242, 55, 4, 0.20)',
                                 padding:'2px 12px'
                             }:{color: 'var(--white)',
                                 borderRadius:  100,
                                 border: '1px solid rgba(51, 138, 243, 0.30)',
                                 background: 'rgba(51, 138, 243, 0.20)',
                                 padding:'2px 12px'
                             }}>
                          {direction}
                      </small>
                  </div>
                  <div className="flag pc" style={{gap:6}}>
                      {country==='United Kingdom'?
                          <Image src={flagImage} alt="flag"/>
                          :
                      <svg style={{position: "relative", top: 0}} xmlns="http://www.w3.org/2000/svg"
                           width="18"
                           height="18" viewBox="0 0 20 20" fill="none">
                          <path
                              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                              stroke="white" strokeMiterlimit="10"/>
                          <path d="M2.92773 7.5H17.0734" stroke="white" strokeLinecap="round"
                                strokeLinejoin="round"/>
                          <path d="M2.92773 12.5H17.0734" stroke="white" strokeLinecap="round"
                                strokeLinejoin="round"/>
                          <path
                              d="M10 17.2985C11.7259 17.2985 13.125 14.0308 13.125 9.99984C13.125 5.9689 11.7259 2.70117 10 2.70117C8.27411 2.70117 6.875 5.9689 6.875 9.99984C6.875 14.0308 8.27411 17.2985 10 17.2985Z"
                              stroke="white" strokeMiterlimit="10"/>
                      </svg>}
                      <small>{country}</small>
                  </div>
                  <div className="flex-row justify-start gap-2 mobile">
                      <div className="flag mobile">
                          {country==='United Kingdom'?
                              <Image src={flagImage} alt="flag"/>
                              :
                              <svg style={{position: "relative", top: 0}} xmlns="http://www.w3.org/2000/svg"
                                   width="18"
                                   height="18" viewBox="0 0 20 20" fill="none">
                                  <path
                                      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                      stroke="white" strokeMiterlimit="10"/>
                                  <path d="M2.92773 7.5H17.0734" stroke="white" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                  <path d="M2.92773 12.5H17.0734" stroke="white" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                  <path
                                      d="M10 17.2985C11.7259 17.2985 13.125 14.0308 13.125 9.99984C13.125 5.9689 11.7259 2.70117 10 2.70117C8.27411 2.70117 6.875 5.9689 6.875 9.99984C6.875 14.0308 8.27411 17.2985 10 17.2985Z"
                                      stroke="white" strokeMiterlimit="10"/>
                              </svg>}
                          <small>{country}</small>
                      </div>
                      <small className="flag mobile" style={direction==='Engineering'?{color: 'var(--white)',
                          borderRadius:  100,
                          border: '1px solid rgba(242, 55, 4, 0.30)',
                          background: 'rgba(242, 55, 4, 0.20)',
                          padding:'2px 12px'
                      }:{color: 'var(--white)',
                          borderRadius:  100,
                          border: '1px solid rgba(51, 138, 243, 0.30)',
                          background: 'rgba(51, 138, 243, 0.20)',
                          padding:'2px 12px'
                      }}>
                      {direction}
                      </small>
                  </div>
              </div>
              <p>
                  {description}
              </p>
              <div className="careers__block__bottom">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"
                          fill="#B3B3B3"/>
                  </svg>
                  <h6>
                      {time}
                  </h6>
                  <svg style={{marginLeft:12}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_1271_17962)">
                          <mask id="mask0_1271_17962" maskUnits="userSpaceOnUse" x="0"
                                y="0" width="24" height="24">
                              <rect width="24" height="24" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_1271_17962)">
                              <path
                                  d="M11.1 19H12.85V17.75C13.6833 17.6 14.4 17.275 15 16.775C15.6 16.275 15.9 15.5333 15.9 14.55C15.9 13.85 15.7 13.2083 15.3 12.625C14.9 12.0417 14.1 11.5333 12.9 11.1C11.9 10.7667 11.2083 10.475 10.825 10.225C10.4417 9.975 10.25 9.63333 10.25 9.2C10.25 8.76667 10.4042 8.425 10.7125 8.175C11.0208 7.925 11.4667 7.8 12.05 7.8C12.5833 7.8 13 7.92917 13.3 8.1875C13.6 8.44583 13.8167 8.76667 13.95 9.15L15.55 8.5C15.3667 7.91667 15.0292 7.40833 14.5375 6.975C14.0458 6.54167 13.5 6.3 12.9 6.25V5H11.15V6.25C10.3167 6.43333 9.66667 6.8 9.2 7.35C8.73333 7.9 8.5 8.51667 8.5 9.2C8.5 9.98333 8.72917 10.6167 9.1875 11.1C9.64583 11.5833 10.3667 12 11.35 12.35C12.4 12.7333 13.1292 13.075 13.5375 13.375C13.9458 13.675 14.15 14.0667 14.15 14.55C14.15 15.1 13.9542 15.5042 13.5625 15.7625C13.1708 16.0208 12.7 16.15 12.15 16.15C11.6 16.15 11.1125 15.9792 10.6875 15.6375C10.2625 15.2958 9.95 14.7833 9.75 14.1L8.1 14.75C8.33333 15.55 8.69583 16.1958 9.1875 16.6875C9.67917 17.1792 10.3167 17.5167 11.1 17.7V19ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                                  fill="#B3B3B3"/>
                          </g>
                      </g>
                      <defs>
                          <clipPath id="clip0_1271_17962">
                              <rect width="24" height="24" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
                  <h6>
                      {salary}
                  </h6>
              </div>
          </div>
      </>
  )
}
export default CareersBlock