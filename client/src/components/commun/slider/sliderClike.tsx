import { type MouseEvent, useState } from "react";

type ClickWithoutMoveHook = {
  handleMouseDown: (event: MouseEvent) => void;
  handleMouseMove: (event: MouseEvent) => void;
  handleMouseUp: (event: MouseEvent) => void;
};

export function sliderClike(
  callback: (id: string | null) => void,
  threshold = 5,
): ClickWithoutMoveHook {
  const [mouseDownPosition, setMouseDownPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);

  const handleMouseDown = (event: MouseEvent) => {
    const id = event.currentTarget.getAttribute("data-id") || "";
    setClickedId(id);
    setMouseDownPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!mouseDownPosition) return;

    const deltaX = Math.abs(event.clientX - mouseDownPosition.x);
    const deltaY = Math.abs(event.clientY - mouseDownPosition.y);

    if (deltaX > threshold || deltaY > threshold) {
      setMouseDownPosition(null);
    }
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (!mouseDownPosition) return;

    const deltaX = Math.abs(event.clientX - mouseDownPosition.x);
    const deltaY = Math.abs(event.clientY - mouseDownPosition.y);

    if (deltaX < threshold && deltaY < threshold) {
      callback(clickedId);
    }

    setMouseDownPosition(null);
  };

  return { handleMouseDown, handleMouseMove, handleMouseUp };
}
