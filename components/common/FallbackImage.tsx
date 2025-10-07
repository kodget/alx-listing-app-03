import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    // Try different image extensions
    if (imgSrc.includes('.png')) {
      setImgSrc(imgSrc.replace('.png', '.jpg'));
    } else if (imgSrc.includes('.jpg')) {
      setImgSrc('/assets/Rectangle 2.png'); // Fallback to a known image
    }
  };

  if (hasError && imgSrc === '/assets/Rectangle 2.png') {
    // Final fallback - show a placeholder
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🏠</div>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      onError={handleError}
    />
  );
};

export default FallbackImage;