import List from "../List";

// APP
export default function Merchandise() {
  const displayedData = [
    {
      id: 8,
      title: "Zyraphine",
      src: "img",
      textBox: "sculture",
      stars: 5,
    },
    {
      id: 7,
      title: "Apple",
      src: "Apple",
      textBox: "fruit",
      stars: 5,
    },
    {
      id: 6,
      title: "Belt",
      src: 'Belt',
      textBox: "Small belt",
      stars: 3,
    },
    {
      id: 5,
      title: "Book case",
      src: "Book case",
      textBox: "Cover",
      stars: 5,
    },
    {
      id: 4,
      title: "Bike",
      src: "image",
      textBox: "Mount bike",
      stars: 5,
    },
    {
      id: 3,
      title: "Book One",
      src: "image",
      textBox: "This is all about the book",
      stars: 5,
    },
    {
      id: 2,
      title: "Car",
      src: "image",
      textBox: "Drive phoo",
      stars: 2,
    },
    {
      id: 1,
      title: "Wings",
      src: "image",
      textBox: "They are delish",
      stars: 4,
    },
  ];

  return (
    <>
      {displayedData.length > 0 && (
        <List items={displayedData} category="Display" />
      )}
    </>
  );
}
