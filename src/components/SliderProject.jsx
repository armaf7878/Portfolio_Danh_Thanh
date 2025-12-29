import { useEffect, useRef, useState } from "react";

export default function SliderProject({ onClose, image }) {
  const [count, setCount] = useState(0);
  const touchStartX = useRef(0);

  const next = () => {
    if (count + 1 < image.length) setCount((p) => p + 1);
  };

  const prev = () => {
    if (count > 0) setCount((p) => p - 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) < 50) return;
    diff < 0 ? next() : prev();
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70">
      <div
        className="relative w-full max-w-6xl px-3 md:px-6 min-h-[100svh] grid place-items-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute z-10 px-3 py-1 border rounded-full top-4 right-4 border-white/40 bg-p-900/70 font-Gothic text-n-50"
        >
          x
        </button>

        <div className="flex items-center justify-center w-full">
          <img
            src={image[count]}
            alt={`Slide ${count + 1}`}
            className="max-h-[80svh] w-full md:w-[85%] object-contain rounded-2xl"
          />
        </div>

        <div className="absolute inset-y-0 items-center justify-between hidden w-full px-4 md:flex">
          <button
            onClick={prev}
            disabled={count === 0}
            className="px-3 py-2 border-2 rounded-full border-p-450 font-Gothic text-n-200 disabled:opacity-40"
          >
            Back
          </button>

          <button
            onClick={next}
            disabled={count + 1 >= image.length}
            className="px-3 py-2 border-2 rounded-full border-p-450 font-Gothic text-n-200 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
