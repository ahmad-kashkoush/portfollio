import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export function useAnimateNav() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isTranslate, setIsTranslate] = useState(false);
  useMakeNavVisible(containerRef, setIsVisible);
  useAddTranslate(containerRef, setIsTranslate);
  return { isVisible, isTranslate, containerRef };
}

export function useAnimateSides(rootMargin = "-300px") {
  const [visible, setVisible] = useState(false);

  const visibleRef = useRef(false);
  const containerRef = useRef(null);
  const observerCallback = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.unobserve(containerRef.current);
  }, [options]);

  useEffect(() => {
    visibleRef.current = visibleRef.current || visible;
  }, [visible, visibleRef]);
  return { visible, containerRef, visibleRef };
}

function useMakeNavVisible(containerRef, setIsVisible) {
  const observerCallback = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting); // add sticky if not true
  };

  const options = {
    root: null,
    rootMargin: "10%",
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
  };
  const options = {
    root: null,
    rootMargin: "8%",
    threshold: 1,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.unobserve(containerRef.current);
  }, [options]);
}
