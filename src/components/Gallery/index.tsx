import { ChangeEvent, useEffect, useState } from "react";
import { Banner, Container, ImageItem, ImageList } from "./styles";

export interface ImageProps {
  id: string;
  image: string;
  petId: string;
  photo_url: string;
}

interface GalleryProps {
  images: ImageProps[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedBanner, setSelectedBanner] = useState('');

  useEffect(() => {
    if (images.length > 0) {
      setSelectedBanner(images[0].photo_url);
    }
  }, [images]);

  function handleBannerChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedBanner(event.target.value);
  }

  return (
    <Container>
      <Banner src={selectedBanner} alt=""/>
      <ImageList>
        {images.map((image) => (
          <ImageItem key={image.id}>
            <img src={image.photo_url} alt={image.image} />
            <input
              type="radio"
              name="image"
              value={image.photo_url}
              checked={selectedBanner === image.photo_url}
              onChange={handleBannerChange}
            />
          </ImageItem>
        ))}
      </ImageList>
    </Container>
  );
}
