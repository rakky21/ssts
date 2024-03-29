import List from "../List";

// APP
export default function Merchandise() {
  const displayedData = [
    {
      id: 8,
      title: "Zyraphine",
      displayedPicture: "img",
      textBox: "sculture",
      stars: 5,
    },
    {
      id: 7,
      title: "Apple",
      displayedPicture: "Apple",
      textBox: "fruit",
      stars: 5,
    },
    {
      id: 6,
      title: "Belt",
      displayedPicture: 'Belt',
      textBox: "Small belt",
      stars: 3,
    },
    {
      id: 5,
      title: "Book case",
      displayedPicture: "Book case",
      textBox: "Cover",
      stars: 5,
    },
    {
      id: 4,
      title: "Bike",
      displayedPicture: "image",
      textBox: "Mount bike",
      stars: 5,
    },
    {
      id: 3,
      title: "Book One",
      displayedPicture: "image",
      textBox: "This is all about the book",
      stars: 5,
    },
    {
      id: 2,
      title: "Car",
      displayedPicture: "image",
      textBox: "Drive phoo",
      stars: 2,
    },
    {
      id: 1,
      title: "Wings",
      displayedPicture: "image",
      textBox: "They are delish",
      stars: 4,
    },
  ];

  const merchandiseData = [
    {
      id: 9,
      title: "Zyraphine2",
      displayedPicture: "image",
      textBox: "sculture",
      stars: 5,
    },
    {
      id: 10,
      title: "Apple2",
      displayedPicture: "image",
      textBox: "fruit",
      stars: 5,
    },
    {
      id: 11,
      title: "Belt2",
      displayedPicture: "image",
      textBox: "Small belt",
      stars: 3,
    },
    {
      id: 12,
      title: "Book case 2",
      displayedPicture: "image",
      textBox: "Cover",
      stars: 5,
    },
  ];

  return (
    <>
      {displayedData.length > 0 && (
        <List items={displayedData} category="Display" />
      )}
      {merchandiseData.length > 0 && (
        <List items={merchandiseData} category="Merchandise" />
      )}
    </>
  );
}
