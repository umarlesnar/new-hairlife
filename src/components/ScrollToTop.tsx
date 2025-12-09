import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollToggle() {
  const [showUp, setShowUp] = useState(false); // true => show "up" chevron
  const [isVisible, setIsVisible] = useState(false); // whether to show any button

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Show button only if page is scrollable (height greater than viewport)
      setIsVisible(scrollHeight > viewportHeight + 50);

      // Switch to "up" arrow if scrolled down more than 150px
      setShowUp(scrollY > 150);
    };

    // run once on mount so the button state is correct immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  if (!isVisible) return null;

  return (
    <button
      onClick={showUp ? scrollToTop : scrollToBottom}
      aria-label={showUp ? "Scroll to top" : "Scroll to bottom"}
      title={showUp ? "Scroll to top" : "Scroll to bottom"}
      // ensure button cannot be clipped and stays on top
      className="
        fixed bottom-8 right-8 z-50
        overflow-visible
        p-3 rounded-full shadow-lg
        bg-[#B78F59] hover:bg-[#202A5B] text-white
        transition-transform transform-gpu
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B78F59]
      "
      // small accessible hint for screen readers
      aria-live="polite"
    >
      {/* keep icon sizing explicit */}
      {showUp ? (
        <ChevronUp className="w-6 h-6" aria-hidden="true" />
      ) : (
        <ChevronDown className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
}
