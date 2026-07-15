import { useMediaQuery } from "react-responsive";

function useResponsive() {

    const isDesktop = useMediaQuery({
        minWidth: 1025,
    });

    const isTablet = useMediaQuery({
        minWidth: 768,
        maxWidth: 1024,
    });

    const isMobile = useMediaQuery({
        maxWidth: 767,
    });

    const isTabletOrMobile = useMediaQuery({
        maxWidth: 1024,
    });

    return {
        isDesktop,
        isTablet,
        isMobile,
        isTabletOrMobile,
    };

}

export default useResponsive;