import Image from "next/image";
import Link from "next/link";
import { LatestNewsVersion6 } from "@/components/LatestNews/LatestNewsVersion6/index";
import sliderimg from "@/images/image-26.jpg";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import featuredImage from "@/images/image-8.jpg";
import imageads from "@/images/rolex.jpg";
import smallad from "@/images/small-ad.jpg";
import sectionimgbird from "@/images/section-article4-bird-img.jpg";
import { LatestNews } from "@/components/LatestNews";

export function MainStoriesFeed(
  hasLatestNewsVersion6,
  hasVerticalAd,
  hasLatestNews
) {
  return (
    <>
      <section className="section-main-stories-feed">
        <div className="top-stories">
          <div className="container">
            <h2>الغذاء والزراعة المستدامة</h2>
            <h3>نصف البشر يأكلون الأرز ، وتغير المناخ يدمره بسرعة</h3>
            <div className="items">
              <div className="item">
                <p>
                  من دبي إلى نهر المسيسيبي أو نهر ميكونغ ، يجد المزارعون
                  والباحثون حلولاً مبتكرة لتهديدات الاحتباس الحراري والأمطار
                  الشديدة وارتفاع مستوى سطح البحر
                </p>
              </div>
              <div className="item">
                <h4>
                  يعزز الذكاء الاصطناعي وتكنولوجيا الفضاء وصول أصحاب الحيازات
                  الصغيرة إلى التمويل
                </h4>
              </div>
              <div className="item">
                <h4>
                  يعزز الذكاء الاصطناعي وتكنولوجيا الفضاء وصول أصحاب الحيازات
                  الصغيرة إلى التمويل
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="article-one-with-sidebar">
            <div className="article">
              <h2>مدن المستقبل</h2>
              <ImageWithCaption
                src={sliderimg}
                alt=""
                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                isLive
              />
              <h3>معلم علمي غير مسبوق</h3>
              <h4>
                يوجد الآن العديد من أدوية العلاج الجيني المعتمدة. كل ذلك ينطوي
                على تناول فيروس ، واستبدال محتوياته الضارة بجين يعالج المرض
              </h4>
            </div>

            <aside className="sidebar">
              {hasLatestNewsVersion6 !== undefined &&
                hasLatestNewsVersion6 !== null && <LatestNewsVersion6 />}
            </aside>
          </div>
          <div className="article-two-with-sidebar">
            <div className="article">
              <h2>علوم </h2>
              <ImageWithCaption
                src={featuredImage}
                width={420}
                height={250}
                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
              />
              <h3> الأمل يمكن أن ينشط التغيير الحقيقي</h3>
              <h4>
                حليمة عدن تصف التأثير المدمر للوباء على أزمة اللاجئين العالمية
              </h4>
            </div>

            <aside className="sidebar">
              {hasVerticalAd !== undefined && hasVerticalAd !== null && (
                <div className="widget-sidebar-ad">
                  <Link href="#">
                    <Image src={imageads} alt="" />
                  </Link>
                </div>
              )}
            </aside>
          </div>
          <div className="article-three-with-sidebar">
            <div className="article">
              <h2>حرب أوكرانيا </h2>
              <ImageWithCaption
                src={sliderimg}
                alt=""
                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                isLive
              />
              <h3>خلافات في القوات الروسية</h3>
              <h4>
                سارع المدونون المؤيدون للحرب في روسيا إلى الادعاء بأن الهجوم
                المضاد الأوكراني الذي طال انتظاره قد بدأ ، لكن المسؤولين
                الأوكرانيين قللوا من أهمية هذا التقدم{" "}
              </h4>
            </div>
            <aside className="sidebar">
              {hasLatestNews !== undefined && hasLatestNews !== null && (
                <LatestNews />
              )}
            </aside>
          </div>
          <div className="article-four-with-sidebar">
            <div className="article">
              <div className="article-right">
                <h2>حرب أوكرانيا</h2>

                <h3> الأمل يمكن أن ينشط التغيير الحقيقي</h3>
                <h4>
                  حليمة عدن تصف التأثير المدمر للوباء على أزمة اللاجئين العالمية{" "}
                </h4>
              </div>
              <div className="article-left">
                {" "}
                <Image src={sectionimgbird} width={375} height={210}></Image>
              </div>
            </div>
          </div>
          <div className="article-three-with-sidebar">
            <div className="article">
              <h2>موضة </h2>
              <ImageWithCaption
                src={sliderimg}
                alt=""
                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                isLive
              />
              <h3> هل توجد آلهة في كل النساء؟</h3>
              <h4>
                مراسل صحيفة البيان يكتشف ذلك من خلال فساتين جوسامر العائمة لهذا
                الموسم
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
