function StyleChar (char) {
    
    const color = "#5352ED";

    if (char === "," || char === "[" || char === "]" || char === `"` || char === "." || char === "-") {
        return { color: color , fontWeight: "bold"};
      } 
      return {};
}

export default StyleChar;