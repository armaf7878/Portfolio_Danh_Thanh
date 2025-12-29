import { useEffect, useState } from "react";

export default function SliderProject({ onClose, image }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count + 1 < image.length) setCount((prev) => prev + 1);
  };

  const handleDescrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") handleIncrease();
      if (e.key === "ArrowLeft") handleDescrease();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, image?.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close slider overlay"
        onClick={() => onClose?.()}
      />

      <div classNaome="relative flex items-center justify-center w-full h-full max-w-6xl px-3 mx-auto md:px-6">
        <button
          type="button"
          className="px-3 py-1 border rounded-full abslute right-4 top-4 border-white/40 bg-p-900/60 font-Gothic text-n-50 hover:bg-p-900"
          onClick={() => onClose?.()}
          aria-label="Close"
        >
          x
        </button>

        <div className="flex items-center justify-between w-full gap-3 md:gap-6">
          <button
            type="button"
            onClick={handleDescrease}
            className="px-3 py-2 border-2 rounded-full shrink-0 border-p-450 font-Gothic text-n-200 hover:bg-p-900 disabled:opacity-40"
            disabled={count === 0}
          >
            Back
          </button>

          <div className="flex justify-center w-full">
            <img
              src={image[count]}
              alt={`Slide ${count + 1}`}
              className="max-h-[80vh] w-full rounded-2xl object-contain md:w-[85%]"
            />
          </div>

          <button
            type="button"
            onClick={handleIncrease}
            className="px-3 py-2 border-2 rounded-full shrink-0 border-p-450 font-Gothic text-n-200 hover:bg-p-900 disabled:opacity-40"
            disabled={count + 1 >= image.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
