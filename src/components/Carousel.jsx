import { Carousel } from "react-bootstrap";
import useImage from "../helper/useImage";

export default function CarouselSection({ articles }) {
  // console.log("articles is", articles);
  const items = articles;
  //   console.log("const items is".items);
  return (
    <Carousel>
      {items
        .filter((item) => item.hash !== undefined)
        .map((item) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={useImage(item.thumbnail.hash)}
                alt={item.title}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}
