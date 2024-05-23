import { useEffect, useRef, useState } from "react";
export function useAnimateNav() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isTranslate, setIsTranslate] = useState(false);
  useMakeNavVisible(containerRef, setIsVisible);
  useAddTranslate(containerRef, setIsTranslate);
  return { isVisible, isTranslate, containerRef };
}

function useMakeNavVisible(containerRef, setIsVisible) {
  const observerCallback = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting); // add sticky if not true
  };

  const options = {
    root: null,
    rootMargin: "90%",
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.unobserve(containerRef.current);
  }, [options]);
}

function useAddTranslate(containerRef, setIsTranslate) {
  const observerCallback = (entries) => {
    const [entry] = entries;
    setIsTranslate(entry.isIntersecting);
    console.log(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.unobserve(containerRef.current);
  }, [options]);
}
