import { useEffect, useState } from "react";

function useHashScroll() {
    const [hash, setHash] = useState(window.location.hash);
    
    useEffect(() => {
        try {
            if (hash !== window.location.hash) {
                setHash(window.location.hash);
            }
            if (window.location.hash !== "") {
                const el = document.querySelector(window.location.hash);
                el.scrollIntoView({
                    behavior: "instant"
                });
            }
        } catch (error) {
            console.log('Error in useHashScroll');
        }

        return () => {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        }
    }, [hash]);

}

export { useHashScroll }