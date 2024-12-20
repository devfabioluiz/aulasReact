import React from "react";
const data = [
  {
    id: 1,
    name: "New Zealand Lake Mountain",
    description: "",
    url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xl.jpg",
    sizes: {
      xs: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xs.jpg",
      s: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-s.jpg",
      m: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-m.jpg",
      l: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-l.jpg",
      xl: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-01-xl.jpg",
    },
  },
  {
    id: 2,
    name: "New Zealand Lake Dock",
    description: "",
    url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-xl.jpg",
    sizes: {
      xs: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-xs.jpg",
      s: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-s.jpg",
      m: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-m.jpg",
      l: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-l.jpg",
      xl: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-02-xl.jpg",
    },
  },
  {
    id: 3,
    name: "New Zealand Fjord Hut",
    description: "",
    url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-xl.jpg",
    sizes: {
      xs: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-xs.jpg",
      s: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-s.jpg",
      m: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-m.jpg",
      l: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-l.jpg",
      xl: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-03-xl.jpg",
    },
  },
  {
    id: 4,
    name: "New Zealand Beach Sun Rise",
    description: "",
    url: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-xl.jpg",
    sizes: {
      xs: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-xs.jpg",
      s: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-s.jpg",
      m: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-m.jpg",
      l: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-l.jpg",
      xl: "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images/img-04-xl.jpg",
    },
  },
];

const ExampleMockApi = () => {
  return (
    <>
      {data.map((image) => (
        <div>{image.sizes.xs}</div>
      ))}
    </>
  );
};

export default ExampleMockApi;
