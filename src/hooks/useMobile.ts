import { useEffect, useState } from 'react';

export default function useMobile(width: number) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    function handleSizeChange() {
        setIsMobile(window.innerWidth <= width);
    }

    useEffect(() => {
        // Only access window on the client side
        if (typeof window !== 'undefined') {
            handleSizeChange(); // Initial check
            window.addEventListener('resize', handleSizeChange);

            return () => {
                window.removeEventListener('resize', handleSizeChange);
            };
        }
    }, [width]);

    if (isMobile === null) {
        return null;
    }

    return isMobile;
}
