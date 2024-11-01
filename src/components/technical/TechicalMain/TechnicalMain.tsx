import './TechnicalMain.css'
import React from "react";
interface MainProps {
    subText:string;
    header:string;
    description:string;
}
const TechnicalMain:React.FC<MainProps> = ({subText,header,description}) => {
  return(
      <div className="technical__main__block">
          <b style={{color: '#F23704'}}>{subText}</b>
          <h1>{header}</h1>
          <sub>{description}</sub>
      </div>
  )
}
export default TechnicalMain;