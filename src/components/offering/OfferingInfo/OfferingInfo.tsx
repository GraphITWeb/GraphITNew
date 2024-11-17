import './OfferingInfo.css';
const OfferingInfo = () => {

    return (
        <div className="offering__info">
            <div className="offering__info__block">
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>85%</h2>
                    <p>of executives believe AI will fundamentally change their businesses within the next five years.</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>9%</h2>
                    <p>of companies are in the late stage of AI integration into their operations, leaving vast opportunities untapped.</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>3x</h2>
                    <p>Organizations leveraging AI at scale are 3× more likely to outperform their peers in revenue growth.
                    </p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>$500B+</h2>
                    <p>in projected global spending on AI technologies in the coming years.</p>
                </div>

            </div>
        </div>
    )
}
export default OfferingInfo;