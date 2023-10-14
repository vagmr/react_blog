import React, { useState, useEffect } from 'react';
import '../style/lunbotu.css'

interface CarouselProps {
    images: string[]; // 图片 URL 数组
    interval?: number; // 轮播间隔时间（毫秒）
}

/**
 * Renders a carousel component that displays a series of images and automatically
 * transitions between them at a specified interval.
 *
 * @param {CarouselProps} images - The images to be displayed in the carousel.格式为字符串数组
 * @param {number} interval - 可选参数，自动轮播间隔时间
 * @returns {ReactElement} The rendered carousel component.
 */
const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
    const [currentImage, setCurrentImage] = useState(0);

    // 定义下一张图片的索引
    const nextImage = (currentIndex: number) => {
        return (currentIndex + 1) % images.length;
    };

    // 切换到下一张图片
    const goToNextImage = () => {
        setCurrentImage(nextImage(currentImage));
    };

    // 自动轮播
    useEffect(() => {
        const intervalId = setInterval(goToNextImage, interval);
        return () => {
            clearInterval(intervalId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImage]);

    return (
        <div className="carousel">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                        display: index === currentImage ? 'block' : 'none',
                    }}
                />
            ))}
            <div className="carousel-controls">
                <button onClick={goToNextImage}>下一张</button>
            </div>
            {/* 轮播图小点显示 */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
