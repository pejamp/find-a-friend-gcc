import { useState } from "react";
import { Banner, Container, ImageItem, ImageList } from "./styles";

interface GalleryProps {
  images: any;
}

export function Gallery({ images }: GalleryProps) {
  const [selectedBanner, setSelectedBanner] = useState(images[0].value);

  function handleBannerChange(event: any) {
    setSelectedBanner(event.target.value);
  }

  return (
    <Container>
      <Banner src={selectedBanner} alt="" />
      <ImageList>
        {images.map((image: any) => (
          <ImageItem key={image.id}>
            <img src={image.value} alt="" />
            <input
              type="radio"
              name="image"
              value={image.value}
              checked={selectedBanner === image.value}
              onChange={handleBannerChange}
            />
          </ImageItem>
        ))}
      </ImageList>
    </Container>
  );
}
