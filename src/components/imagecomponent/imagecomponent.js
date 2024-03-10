import Image from 'next/image';
const ImageComponent = ({ imageName }) => {
  // Dynamically import the image
  const importImage = async (imageName) => {
    try {
      const { default: image } = await import(`../../productimages/${imageName}.png`);
      return image;
    } catch (error) {
      console.error(`Failed to import image ${imageName}:`, error);
      return null;
    }
  };

  return (
    <div>
      {imageName.map((name, index) => (
        <div key={index}>
          <Image src={importImage(name)} alt={`Image ${name}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
