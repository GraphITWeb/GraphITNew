'use client';
import './Unlocked.css';
import '../../UI/Sticky/Sticky.css'
import { useEffect, useState } from "react";

const Unlocked = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const container = document.getElementById('container');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const containerRect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (containerRect.top <= viewportHeight / 2 + 150 ) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="container" className="unlocked_container">
            <h1 className="sticky__text" style={{
                opacity: isVisible ? 1 : 0,
                whiteSpace: 'nowrap',
            }}>
                AI Unlocked
            </h1>
            <svg className="pc" style={{position: 'absolute', right: 0, top: 'Calc(22vh + 250px)'}} xmlns="http://www.w3.org/2000/svg"
                 width="248" height="324" viewBox="0 0 248 324" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M56.9747 0.267434L56.5115 0L56.0483 0.267434L0.463209 32.3595L0 32.6269V33.1618V97.3459V97.8807L0.463209 98.1482L56.0483 130.24L56.5115 130.508L56.9747 130.24L112.098 98.4145L166.758 129.972V193.525V194.059L167.221 194.327L222.342 226.151V289.888V290.423L222.806 290.69L278.391 322.782L278.854 323.05L279.317 322.782L334.902 290.69L335.365 290.423V289.888V225.704V225.169L334.902 224.902L279.781 193.077V129.341V128.806L279.317 128.538L224.197 96.7144V33.1618V32.6269L223.734 32.3595L168.149 0.267434L167.685 0L167.222 0.267434L112.098 32.0932L56.9747 0.267434ZM168.61 129.974L223.354 98.3673L277.928 129.875V192.99L223.269 224.547L168.61 192.99V129.974ZM222.344 96.7128V33.6967L167.685 2.13947L113.027 33.6967V96.811L167.6 128.319L222.344 96.7128ZM1.85284 96.811V33.6967L56.5115 2.13947L111.17 33.6967V96.811L56.5115 128.368L1.85284 96.811ZM224.195 226.239V289.353L278.854 320.91L333.513 289.353V226.239L278.854 194.682L224.195 226.239Z"
                      fill="url(#paint0_linear_189_1671)"/>
                <defs>
                    <linearGradient id="paint0_linear_189_1671" x1="167.683" y1="2.85764e-06" x2="121.5" y2="251"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF0800"/>
                        <stop offset="1" stop-color="#09091A"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg className="pc" style={{position: 'absolute', left: 0, top: 'Calc(60vh + 250px)'}} xmlns="http://www.w3.org/2000/svg"
                 width="314" height="516" viewBox="0 0 314 516" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M201.661 515.155L202.123 515.422L202.586 515.155L258.062 483.126L258.525 482.859L258.525 482.325L258.525 418.266L258.525 417.732L258.062 417.465L203.049 385.703L203.049 322.272L203.049 321.738L202.587 321.471L147.567 289.705L147.567 226.716L201.254 195.72L201.66 195.955L257.136 227.984L257.599 228.251L258.061 227.984L313.538 195.955L314 195.688L314 195.154L314 131.095L314 130.561L313.538 130.295L258.778 98.6791L258.878 98.6216L258.878 98.0878L258.878 34.0288L258.878 33.495L258.416 33.2281L202.939 1.19862L202.477 0.931714L202.014 1.19862L146.538 33.2281L146.075 33.495L146.075 34.0288L146.075 97.3245L91.1658 129.027L36.1528 97.2648L35.6905 96.9979L35.2282 97.2648L-20.2485 129.294L-20.7108 129.561L-20.7108 130.095L-20.7108 193.532L-75.724 225.294L-76.1863 225.56L-76.1863 226.094L-76.1863 290.153L-76.1863 290.687L-75.724 290.954L-20.2473 322.983L-19.785 323.25L-19.3227 322.983L35.6905 291.222L90.2465 322.719L90.2465 386.331L90.2465 386.864L90.7088 387.131L145.722 418.893L145.722 482.325L145.722 482.859L146.184 483.125L201.661 515.155ZM90.2425 193.53L35.6905 225.026L-18.8616 193.53L-18.8616 130.629L35.6905 99.1332L90.2425 130.629L90.2425 193.53ZM-19.8627 195.177L-74.337 226.628L-74.337 289.619L-19.785 321.115L34.7647 289.621L34.7647 226.717L-19.8627 195.177ZM36.6163 226.717L36.6163 289.621L91.166 321.115L145.718 289.619L145.718 226.711L91.1722 195.219L36.6163 226.717ZM146.719 225.071L92.0956 193.534L92.0956 130.625L146.648 99.1295L201.198 130.624L201.198 131.095L201.198 193.618L146.719 225.071ZM203.049 194.622L203.049 194.15L203.049 131.628L257.599 100.133L312.151 131.629L312.151 194.62L257.599 226.116L203.049 194.622ZM201.2 385.702L146.566 417.245L92.0958 385.797L92.0958 322.805L146.648 291.31L201.2 322.805L201.2 385.702ZM147.571 418.895L147.571 481.791L202.123 513.287L256.675 481.791L256.675 418.8L202.205 387.351L147.571 418.895ZM257.029 97.5539L257.029 34.5626L202.477 3.06703L147.925 34.5626L147.925 97.5539L202.477 129.05L257.029 97.5539Z"
                      fill="url(#paint0_linear_189_1641)"/>
                <defs>
                    <linearGradient id="paint0_linear_189_1641" x1="224.875" y1="477.5" x2="344.509" y2="-74.9699"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#09091B"/>
                        <stop offset="1" stop-color="#FF0800"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg className="pc" style={{position: 'absolute', right: 0, bottom: '-70vh',zIndex:-4}}  xmlns="http://www.w3.org/2000/svg" width="346" height="834" viewBox="0 0 346 834" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M419.163 167.815L419.43 167.352L419.163 166.89L387.133 111.413L386.866 110.951L386.333 110.951L322.274 110.951L321.74 110.951L321.473 111.413L289.707 166.433L226.723 166.433L195.225 111.876L226.986 56.8636L227.253 56.4013L226.986 55.939L194.957 0.462296L194.69 -9.82369e-06L194.156 -9.84703e-06L130.097 -1.26471e-05L129.563 -1.26705e-05L129.296 0.462293L97.8377 54.9502L34.0299 54.9502L33.496 54.9502L33.2291 55.4125L1.19965 110.889L0.932742 111.351L1.19965 111.814L33.2291 167.29L33.496 167.753L34.0298 167.753L97.2318 167.753L97.267 167.814L129.031 222.83L97.2668 277.847L96.9999 278.31L97.2668 278.772L129.296 334.249L129.563 334.711L130.097 334.711L193.534 334.711L225.028 389.261L193.266 444.274L192.999 444.736L193.266 445.198L225.296 500.675L225.562 501.137L226.096 501.137L289.712 501.137L321.207 555.688L289.71 610.242L226.72 610.242L194.957 555.227L194.69 554.764L194.156 554.764L130.097 554.764L129.563 554.764L129.296 555.227L97.2668 610.703L96.9999 611.166L97.2668 611.628L129.03 666.644L97.2668 721.66L96.9999 722.122L97.2668 722.585L129.296 778.061L129.563 778.524L130.097 778.524L193.533 778.524L225.296 833.537L225.562 834L226.096 834L290.155 834L290.689 834L290.956 833.537L322.718 778.524L386.333 778.524L386.866 778.524L387.133 778.061L419.163 722.585L419.43 722.122L419.163 721.66L387.399 666.644L419.163 611.628L419.43 611.166L419.163 610.703L387.4 555.688L419.163 500.673L419.43 500.21L419.163 499.748L387.401 444.735L419.163 389.722L419.43 389.259L419.163 388.797L387.133 333.32L386.866 332.858L386.333 332.858L322.717 332.858L291.224 278.31L322.721 223.754L386.333 223.754L386.866 223.754L387.133 223.291L419.163 167.815ZM193.534 667.57L225.029 722.121L193.533 776.674L130.631 776.674L99.1352 722.122L130.631 667.57L193.534 667.57ZM195.179 777.676L226.63 832.151L289.621 832.151L321.117 777.599L289.621 723.047L226.72 723.047L195.179 777.676ZM226.718 721.196L289.621 721.196L321.117 666.644L289.621 612.092L226.718 612.092L195.223 666.644L226.718 721.196ZM193.622 556.614L225.074 611.089L193.534 665.718L130.631 665.718L99.1352 611.166L130.631 556.614L193.622 556.614ZM193.532 223.758L225.028 278.31L193.532 332.862L130.631 332.862L99.1352 278.31L130.631 223.758L193.532 223.758ZM195.179 333.863L226.629 388.335L289.623 388.335L321.117 333.785L289.623 279.235L226.719 279.235L195.179 333.863ZM226.719 277.384L289.623 277.384L321.117 222.834L289.621 168.282L226.716 168.282L195.222 222.831L226.719 277.384ZM130.919 110.889L130.954 110.95L193.624 110.95L225.118 56.4013L193.622 1.84921L130.631 1.84921L99.2978 56.1197L130.919 110.889ZM34.5637 56.7994L97.2298 56.7994L97.2669 56.8636L128.888 111.633L97.5549 165.904L34.5637 165.904L3.06806 111.351L34.5637 56.7994ZM225.075 167.277L193.536 221.904L130.631 221.904L99.1354 167.351L130.629 112.803L193.624 112.803L225.075 167.277ZM322.806 445.661L385.8 445.661L417.294 500.21L385.799 554.762L322.807 554.762L291.312 500.21L322.806 445.661ZM385.8 443.809L417.294 389.259L385.799 334.707L322.807 334.707L291.312 389.259L322.806 443.809L385.8 443.809ZM322.807 112.8L385.799 112.8L417.294 167.352L385.799 221.904L322.807 221.904L291.312 167.352L322.807 112.8ZM195.134 444.736L226.629 390.186L289.623 390.186L321.117 444.736L289.621 499.288L226.63 499.288L195.134 444.736ZM385.799 556.614L322.807 556.614L291.312 611.166L322.807 665.718L385.799 665.718L417.294 611.166L385.799 556.614ZM322.807 667.57L385.799 667.57L417.294 722.122L385.799 776.674L322.807 776.674L291.312 722.122L322.807 667.57Z"
                      fill="url(#paint0_linear_189_1447)"/>
                <defs>
                    <linearGradient id="paint0_linear_189_1447" x1="313.34" y1="876.5" x2="117.368" y2="-105.609"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#09091B"/>
                        <stop offset="1" stop-color="#FF0800"/>
                    </linearGradient>
                </defs>
            </svg>
            <div className="unlocked_block" style={{marginTop: '1vh'}}>
                <h5>Understanding<span> Your Needs</span>
                </h5>
                <strong style={{color: 'var(--text-gray)'}}>
                    We begin by immersing ourselves in your organization’s strategic landscape, engaging with key
                    stakeholders to identify unique challenges and goals. This foundational phase ensures that our
                    AI-driven solutions are precisely aligned with your business vision. </strong>
            </div>

            <div className="unlocked_block" style={{marginLeft: 'auto'}}>
                <h5>Identifying<span>Opportunities</span>
                </h5>
                <strong style={{color: 'var(--text-gray)'}}>
                    Leveraging our expertise in AI and analytics, we uncover hidden opportunities within your
                    operations. From streamlining workflows to enhancing decision-making, we reveal areas where
                    intelligent solutions can drive significant impact.
                </strong>
            </div>

            <div className="unlocked_block" style={{marginBottom: '50vh'}}>
                <h5>Creating
                    <span>Success Roadmap</span>
                </h5>
                <strong style={{color: 'var(--text-gray)'}}>
                    We craft a comprehensive roadmap that integrates AI and big data seamlessly into your business.
                    Designed for flexibility and scalability, our approach ensures that each phase - from discovery to
                    implementation - delivers measurable results and supports your long-term strategy.
                </strong>
            </div>
        </div>
    );
}

export default Unlocked;
