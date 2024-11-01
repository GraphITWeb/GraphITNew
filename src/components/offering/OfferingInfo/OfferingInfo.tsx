import './OfferingInfo.css';
const OfferingInfo = () => {

    return (
        <div className="offering__info">
            <div className="offering__info__block">
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>86%</h2>
                    <p>of companies reported an increase in their cloud initiatives over a two-year period</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>57%</h2>
                    <p>of IT budgets are spent on maintenance rather than innovation with technologies like cloud and
                        AI</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>2-3x</h2>
                    <p>probability to innovate for the companies who are using cloud to transform their business and
                        products</p>
                </div>
                <div className="offering__info__block__inside">
                    <span className="orange__span"/>
                    <h2>$10B+</h2>
                    <p>collective spending on innovation per month by major cloud providers</p>
                </div>

            </div>
        </div>
    )
}
export default OfferingInfo;