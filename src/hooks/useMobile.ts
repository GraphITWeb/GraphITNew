import { useEffect, useState } from 'react';

export default function useMobile(width: number) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleSizeChange = () => {
            setIsMobile(window.innerWidth <= width);
        };

        // Set the initial value on the client-side
        handleSizeChange();

        window.addEventListener('resize', handleSizeChange);
        return () => window.removeEventListener('resize', handleSizeChange);
    }, [width]);

    return isMobile;
}
