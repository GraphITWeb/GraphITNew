import './OfferingInfo.css';
import React from "react";
interface OfferingInfoProps {
    header1:string;
    header2:string;
    header3:string;
    header4:string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}
const OfferingInfo: React.FC<OfferingInfoProps> = ({
                                                       header1,
                                                       header2,
                                                       header3,
                                                       header4,
                                                       text1,
                                                       text2,
                                                       text3,
                                                       text4
                                                   }) => {
    return (
        <div className="offering__info">
            <div className="offering__info__block">
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>{header1}</h2>
                    <p>{text1}</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>{header2}</h2>
                    <p>{text2}</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>{header3}</h2>
                    <p>{text3}
                    </p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>{header4}</h2>
                    <p>{text4}</p>
                </div>

            </div>
        </div>
    )
}
export default OfferingInfo;