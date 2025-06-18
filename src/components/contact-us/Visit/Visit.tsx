import './Visit.css'
const Visit = () => {
    return(
        <div className="visit">
            <div>
                <b>Our locations</b>
                <h2>Visit our offices</h2>
                <sub>Find us at these locations</sub>
            </div>
            <div className="visit__offices">
                <div className="visit__office">
                    <h5>London, United Kingdom</h5>
                    <p>33 Queen Street,<br/>
                        Office 03-106, EC4R 1AP</p>
                </div>
                <div className="visit__office">
                    <h5>Dubai, United Arab Emirates</h5>
                    <p>Dubai Silicon Oasis,<br/>
                        DDP, Building A1</p>
                </div>
            </div>
        </div>
    )
}
export default Visit