export const colors: { hex: string; name: string }[] = [
  { hex: "#eb785a", name: "Grapefruit" },
  { hex: "#ebb29c", name: "Grapefruit Light" },
  { hex: "#28d38c", name: "Kiwi" },
  { hex: "#adf3c7", name: "Kiwi Light" },
  { hex: "#ecae42", name: "Tangerine" },
  { hex: "#fae19a", name: "Tangerine Light" },
  { hex: "#f5e7d2", name: "Sand" },
  { hex: "#fdf9f5", name: "Sand Light" },
  { hex: "#e0d3bb", name: "Khaki" },
  { hex: "#f8f1eb", name: "Khaki Light" },
];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
