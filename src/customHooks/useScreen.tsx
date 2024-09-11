import { useMediaQuery } from "react-responsive";

const useScreen = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const isBig = useMediaQuery({ query: `(min-width: 1440px)` });

    return {isMobile, isBig}
}

export default useScreen;