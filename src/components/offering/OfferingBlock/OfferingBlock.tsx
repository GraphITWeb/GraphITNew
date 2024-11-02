'use client'
import './OfferingBlock.css';
import {useEffect, useState} from "react";
import BigBlock from "@/components/offering/OfferingBlock/BigBlock";

const OfferingBlock = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const headers = [
        'Bringing intelligent business operations to innovate and run core processes',
        'Transforming business models with digital technologies',
        'Enhancing customer experiences through data-driven insights',
        'Streamlining operations with advanced automation',
    ];
    const percents=[
        '42','88','99','18'
    ]
    useEffect(() => {
        console.log(selected);
        const element = document.querySelector('.offering__offering__block__small__big');
        if(element){
            element.classList.remove('no__visible')
            element.classList.remove('visible');
        }
        if (selected !== null) {
            setIsVisible(true);
            if (element) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                void element.offsetHeight;
                element.classList.add('visible');
            }
        } else {
            setIsVisible(false);
            if (element) {
                console.log('here',element)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                void element.offsetHeight;
                console.log('hereoff',element)
                element.classList.add('no__visible')
                console.log('here2',element)
            }
        }
    }, [selected]);
    return (<div style={{position: 'relative'}}>
            <div className="offering__offering__block">
                <div className="offering__offering__block__small">
                    <div
                        className={`${isVisible ? "offering__offering__block__small__big visible" : "offering__offering__block__small__big no__visible"}`}>
                        {selected === null ?
                            <>
                                <div
                                    className="offering__offering__block__small__big__div"
                                ><span className="orange__span"/>
                                    <h3>
                                        Data is the driver and AI is the<br/>differentiator
                                    </h3>
                                    <small
                                        style={{
                                            borderColor: 'rgba(51, 138, 243, 0.30)',
                                            backgroundColor: 'rgba(51, 138, 243, 0.20)',
                                        }}
                                    >Cloud data and AI</small>
                                </div>
                                <div className="offering__offering__block__expand" onClick={() => setSelected(0)}>
                                <sub>
                                        Expand
                                    </sub>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24"
                                         fill="none">
                                        <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                              fill="white"/>
                                    </svg>
                                </div>
                                <div className="offering__offering__block__small__big__second">
                                </div>
                            </> :
                            <>
                                <BigBlock setSelected={setSelected} header={headers[selected]} percent={percents[selected]}/>
                            </>}
                    </div>

                    {selected === null &&
                        <div
                            className={`${isVisible ? "offering__offering__block__expand__content visible" : "offering__offering__block__small__small width__animation"}`}>
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
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
                            <div className="offering__offering__block__expand" onClick={() => setSelected(1)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>}
                </div>
                {selected === null &&
                    <div className="offering__offering__block__small to__top">
                        <div
                            className="offering__offering__block__small__small">
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
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
                            <div className="offering__offering__block__expand" onClick={() => setSelected(2)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="offering__offering__block__small__big"
                        >
                            <div
                                className="offering__offering__block__small__big__div"
                            >
                                <span className="orange__span"/>
                                <h3>
                                    Gain resilience and innovate faster with a modern infrastructure </h3>
                                <small
                                    style={{
                                        borderColor: 'rgba(150, 255, 108, 0.30)',
                                        backgroundColor: 'rgba(150, 255, 108, 0.20)',
                                    }}
                                >Cloud infrastructure</small>
                            </div>
                            <div className="offering__offering__block__expand" onClick={() => setSelected(3)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <div className="justify-end offering__offering__block__small__big__div" style={{paddingBottom: 72}}>
                                <h2 style={{marginTop: 64}}>34%</h2>
                                <p style={{color: '#fff'}}>of companies sat legacy infrastructure is one of the
                                    top
                                    three
                                    barriers to realizing cloud value</p>
                            </div>
                        </div>
                    </div>}
            </div>
            {selected !== null &&
                <div className="offering__offering__block">
                    {selected !== 0 &&
                        <div
                            className="offering__offering__block__small__small small__text">
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
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
                            <div className="offering__offering__block__expand " onClick={() => setSelected(0)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>}
                    {
                        selected !== 1 &&
                        <div
                            className="offering__offering__block__small__small small__text">
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
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
                            <div className="offering__offering__block__expand" onClick={() => setSelected(1)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>
                    }
                    {selected !== 2 &&
                        <div
                            className="offering__offering__block__small__small small__text">
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
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
                            <div className="offering__offering__block__expand" onClick={() => setSelected(2)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>
                    }
                    {selected !== 3 &&
                        <div
                            className="offering__offering__block__small__small small__text">
                            <div className="offering__offering__block__small__small__div">
                                <span className="orange__span"/>
                                <h3>
                                    Gain resilience and innovate faster with a modern infrastructure </h3>
                                <small
                                    style={{
                                        borderColor: 'rgba(150, 255, 108, 0.30)',
                                        backgroundColor: 'rgba(150, 255, 108, 0.20)',
                                    }}
                                >Cloud infrastructure</small>
                            </div>
                            <div className="offering__offering__block__expand" onClick={() => setSelected(3)}>
                                <sub>
                                    Expand
                                </sub>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                          fill="white"/>
                                </svg>
                            </div>
                        </div>}
                </div>
            }
        </div>
    )
}
export default OfferingBlock;