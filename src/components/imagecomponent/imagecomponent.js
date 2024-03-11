import Image from 'next/image';
const ImageComponent = ({ imageName }) => {


  const importImage = async (x) => {
    try {
      const { default: image } = await import(`../../productimages/${'5nyjdxaheb0'}.png`);
      return image;
    } catch (error) {
      console.error(`Failed to import image ${x}:`, error);
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
