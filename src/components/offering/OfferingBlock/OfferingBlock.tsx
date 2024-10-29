import './OfferingBlock.css';

const OfferingBlock = () => {
    return (
        <div className="offering__offering__block">
            <div className="offering__offering__block__small">
                <div
                    className="offering__offering__block__small__big">
                    <div>
                        <span/>
                        <h3>
                            Data is the driver and AI is the differentiator
                        </h3>
                        <small
                        style={{
                            borderColor: 'rgba(51, 138, 243, 0.30)',
                            backgroundColor: 'rgba(51, 138, 243, 0.20)',
                        }}
                        >Cloud data and AI</small>
                    </div>
                    <div className="offering__offering__block__expand">
                        <sub>
                            Expand
                        </sub>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="offering__offering__block__small__big__second">
                    </div>
                </div>
                <div
                    className="offering__offering__block__small__small">
                    <div>
                        <span/>
                        <h3>
                            Become a world-class software organization
                        </h3>
                        <small
                        style={{
                            borderColor: 'rgba(242, 55, 4, 0.30)',
                            backgroundColor: 'rgba(242, 55, 4, 0.20)',
                        }}
                        >Application transformation</small>
                    </div>
                    <div className="offering__offering__block__expand">
                        <sub>
                            Expand
                        </sub>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="offering__offering__block__small">
                <div
                    className="offering__offering__block__small__small">
                    <div>
                        <span/>
                        <h3>
                            Reimagining experiences for people, purpose and profitability
                        </h3>
                        <small
                        style={{
                            borderColor: 'rgba(255, 79, 202, 0.30)',
                            backgroundColor: 'rgba(255, 79, 202, 0.20)',
                        }}
                        >Edge computing</small>
                    </div>
                    <div className="offering__offering__block__expand">
                        <sub>
                            Expand
                        </sub>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div
                    className="offering__offering__block__small__big"
                >
                    <div>
                        <span/>
                        <h3>
                            Gain resilience and innovate faster with a modern infrastructure                        </h3>
                        <small
                        style={{
                            borderColor: 'rgba(150, 255, 108, 0.30)',
                            backgroundColor: 'rgba(150, 255, 108, 0.20)',
                        }}
                        >Cloud infrastructure</small>
                    </div>
                    <div className="offering__offering__block__expand">
                        <sub>
                            Expand
                        </sub>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="justify-end" style={{paddingBottom:72}}>
                        <h2 style={{marginTop:64}}>34%</h2>
                        <p style={{color:'#fff'}}>of companies sat legacy infrastructure is one of the top three barriers to realizing cloud value</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfferingBlock;