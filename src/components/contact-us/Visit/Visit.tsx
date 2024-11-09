import './Visit.css'
const Visit = () => {
    return(
        <div className="visit">
            <div>
                <b>Our locations</b>
                <h2>Visit our offices</h2>
                <sub>Find us at these locations</sub>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start',alignItems: 'center',gap:32}}>
                <div style={{width:300}}>
                    <h5>Kyiv, Ukraine</h5>
                    <p>53 Beresteyskyi Prospect<br/>
                        Kyiv, 02000</p>
                </div>
                <div style={{width: 300}}>
                    <h5>London, England</h5>
                    <p>53 Beresteyskyi Prospect<br/>
                        Kyiv, 02000</p>
                </div>
            </div>
        </div>
    )
}
export default Visit