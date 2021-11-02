import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const TextHighlight = () => {
  const [state, setState] = useState({
    showPopover: false,
    x: 0,
    y: 0,
    selectedText: "",
  });
  const highlightRef = useRef();

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const hidePopup = () => {
    setState({ ...state, showPopover: false });
  };

  const onMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (!selectedText) {
      hidePopup();
      return;
    }

    const selectionRange: any = selection?.getRangeAt(0);
    const startNode = selectionRange?.startContainer.parentNode;
    const endNode = selectionRange?.endContainer.parentNode;

    const highlightable: any = highlightRef.current;
    const highlightRegion =
      highlightable && highlightable.querySelector("highlight-pop");

    const { x, y, width } = selectionRange.getBoundingClientRect();
    if (!width) {
      hidePopup();
      return;
    }

    setState({
      x: x + width / 2,
      y: y + window.scrollY - 10,
      selectedText,
      showPopover: true,
    });
  };

  return <div></div>;
};

export default TextHighlight;
