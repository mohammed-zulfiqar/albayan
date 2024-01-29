import Image from "next/image";
import image34 from "@/images/image-34.jpg";

export function SmallStoriesFeed() {
  return (
    <>
      <section className="section-small-stories-feed">
        <div className="container">
          <div className="item">
            <h2>قصص البيان</h2>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
          <div className="item">
            <Image src={image34} />
            <div className="name">نتاشا الفضلي</div>
            <div className="company">sivvi.com</div>
          </div>
        </div>
      </section>
    </>
  );
}
