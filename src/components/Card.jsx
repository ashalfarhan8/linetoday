import { Card, Button } from "react-bootstrap";
import useImage from "../helper/useImage";

export default function CardSection({ article }) {
  return (
    <Card className="w-auto">
      <Card.Img
        className="h-32 object-cover"
        alt={article.title}
        src={useImage(article.thumbnail.hash)}
      />
      <Card.Body className="flex flex-col justify-between">
        <div>
          <p className="text-sm md:text-md font-medium overflow-clip">
            {article.title}
          </p>
          <a
            href={article.publisherImageCdnHash}
            className="text-black no-underline text-sm hover:no-underline hover:text-green-800"
          >
            {article.publisher}
          </a>
        </div>
        <Button variant="info">
          <a
            href={article.url.url}
            className="text-white no-underline text-xs md:text-base"
          >
            Selengkapnya
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
