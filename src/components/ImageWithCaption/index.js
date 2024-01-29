import Image from 'next/image';

export function ImageWithCaption({ 
    src,
    width, 
    height, 
    caption, 
    copyright,
    isLive
}) {
    return (
        <>
            <figure>
                <Image 
                    src={src} 
                    width={width} 
                    height={height} 
                    alt="" 
                    copyright={copyright} 
                />
                <div className="image-copyright">{copyright}</div>
                {caption && (
                    <figcaption>{caption}</figcaption>
                )}
                {isLive && (
                    <div className="watch-live"></div>
                )}
            </figure>
        </>
    );
}