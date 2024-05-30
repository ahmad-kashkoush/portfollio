import { useAnimateSides } from "./hooks/useAnimateNav";

export function ThemeSwitcher({ theme, onClick }) {
  const { visibleRef, visible, containerRef } = useAnimateSides("100px");
  function handleClick(e) {
    e.preventDefault();
    onClick();
  }
  return (
    <button
      ref={containerRef}
      onClick={handleClick}
      className={`theme-switcher
      ${visibleRef.current || visible ? "get-theme-from-side" : ""}
    `}
    >
      {theme === "light" && <i className="fa-regular fa-sun"></i>}
      {theme === "dark" && <i className="fa-regular fa-moon"></i>}
    </button>
  );
}
