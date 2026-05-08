"use client";

import { useEffect } from "react";

export function TawkToWidget() {
  useEffect(() => {
    if (document.getElementById("tawk-to-script")) return;

    const w = window as typeof window & { Tawk_API: object; Tawk_LoadStart: Date };
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-to-script";
    script.async = true;
    script.src = "https://embed.tawk.to/69fd2edd9187a01c34e596a9/1jo2fu50a";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);
  }, []);

  return null;
}
