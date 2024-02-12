import { useEffect } from "react";

function useHashScroll() {
    useEffect(() => {
        try {
            if (window.location.hash !== "") {
                const el = document.querySelector(window.location.hash);
                el.scrollIntoView();
            }
        } catch (error) {
            console.log('Error in useHashScroll');
        }
    });
}

export { useHashScroll }