import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Mayuri Mushrooms` : "Mayuri Mushrooms — Healthy, Rich & Delicious";
    document.title = fullTitle;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      description ||
        "Premium, chemical-free oyster mushrooms grown fresh in Chennai. Pre-order online and learn to grow your own at the Easy Grow Workshop."
    );
  }, [title, description]);

  return null;
}
