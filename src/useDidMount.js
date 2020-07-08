import React, { useRef, useEffect } from "react";

export function useDidMount(callback) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      callback();
    } else {
      didMountRef.current = true;
    }
  }, [didMountRef.current]);
}
