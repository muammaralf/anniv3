import React from "react";
import { useState } from "react";

const CobaAja = () => {
  const [angka, setAngka] = useState(0);
  const [txt, setTxt] = useState("");
  const generate = () => {
    const harapan = [
      "Aku",
      "Harap",
      "Semoga",
      "Kita",
      "Bisa",
      "Jadi",
      "Orang",
      "Yang",
      "Lebih",
      "Baik",
      "Secara",
      "Lahir",
      "Ataupun",
      "Batin",
    ];

    setTxt((txt) => (txt += harapan[angka]));
    // txt = txt + harapan[angka];
    if (angka != harapan.length - 1) setTxt((txt) => (txt += " "));
  };

  //   const generate =
  return (
    <div className="h-96">
      <p>{txt}</p>
      <button
        type="button"
        onClick={() => {
          setAngka((angka) => angka + 1);
          generate();
        }}
      >
        heuu
      </button>
    </div>
  );
};

export default CobaAja;
