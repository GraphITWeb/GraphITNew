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
    setActiveCareers:() => void;
}
const CareersBlock: React.FC<CareersBlockProps>  = ({position,direction,country,description,time,setActiveCareers}) => {
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

              </div>
          </div>
      </>
  )
}
export default CareersBlock