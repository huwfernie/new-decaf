import { useState, useCallback, useEffect } from "react";

function useMenu() {
    const [showMenu, setShowMenu] = useState(false);
    
    // close menu on Escape key
    const onKeyUp = useCallback((event) => {
      if (event.keyCode === 27) {
        setShowMenu(false);
      }
    }, []);
    
    useEffect(() => {
      if (showMenu) {
        window.addEventListener("keyup", onKeyUp);
      } else {
        window.removeEventListener("keyup", onKeyUp);
      }
    }, [showMenu, onKeyUp]);

    return {
        open: () => setShowMenu(true),
        close: () => setShowMenu(false),
        toggle: () => setShowMenu((current) => !current),
        isOpen: showMenu
    }
}

export { useMenu }
