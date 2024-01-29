import React from "react";
import Link from "next/link";
import picks1 from "@/images/picks1.png";
import picks2 from "@/images/picks2.png";
import picks3 from "@/images/picks3.png";
import picks4 from "@/images/picks4.png";
import picks5 from "@/images/picks5.png";
import picks6 from "@/images/picks6.png";
import { ImageWithCaption } from "../ImageWithCaption";

export function EditorsPicks() {
  return (
    <>
      <section className="section-editors-picks">
        <div className="container">
          <h3>اختيارات المحررين</h3>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                <Link href="/">تنشط قبيل شهر رمضان المبارك</Link>
              </div>
              <h4>
                <Link href="/">
                  باع التنفيذيون في وادي السيليكون أسهماً مقابل 84 مليون دولار.
                  هل كانت مصادفة؟ أسئلة جديدة حول مبيعات الأسهم الداخلية في SVB{" "}
                </Link>
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks1}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                <Link href="/">تنشط قبيل شهر رمضان المبارك </Link>
              </div>
              <h4>
                <Link href="/">
                  باع التنفيذيون في وادي السيليكون أسهماً مقابل 84 مليون دولار.
                  هل كانت مصادفة؟ أسئلة جديدة حول مبيعات الأسهم الداخلية في SVB{" "}
                </Link>
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks2}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                <Link href="/">تنشط قبيل شهر رمضان المبارك </Link>
              </div>
              <h4>
                <Link href="/">
                  باع التنفيذيون في وادي السيليكون أسهماً مقابل 84 مليون دولار.
                  هل كانت مصادفة؟ أسئلة جديدة حول مبيعات الأسهم الداخلية في SVB
                </Link>
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks3}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                {" "}
                <Link href="/">الأهلي المصري </Link>
              </div>
              <h4>
                <Link href="/">
                  رامون ديازالسعودي الحديث عن تكهنات بشأن محاولة ناديه التعاقد
                  مع ليونيل ميسي في ظل تركيزه بمواجهة بإياب نهائي أبطال{" "}
                </Link>{" "}
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks4}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                {" "}
                <Link href="/">تنشط قبيل شهر </Link>
              </div>
              <h4>
                <Link href="/">
                  جاسم بن حمد يستعد لتقديم عرض ثالث للاستحواذ على نادي مانشستر
                  يونايتد بأقل من خمسة مليارات جنيه استرليني{" "}
                </Link>
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks5}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
          <div className="editors-wrapper">
            <div className="editors-text-wrapper">
              <div className="editors-category">
                <Link href="/">تنشط قبيل شهر </Link>
              </div>
              <h4>
                <Link href="/">
                تندرج ضمن أعمال اللجنة العليا للتنمية 
                </Link>
              </h4>
            </div>
            <div className="image-wrapper">
              <Link href="/">
                <ImageWithCaption
                  src={picks6}
                  width={900}
                  height={500}
                  copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
