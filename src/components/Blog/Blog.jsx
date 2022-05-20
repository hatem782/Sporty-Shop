import React from "react";
import { useStyles } from "./BlogStyles";
import { DateParser } from "../../functions/DateTimeFn";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";

function Blog({ Item, lang }) {
  const cs = useStyles();
  return (
    <>
      <div style={{ backgroundColor: "#0F0E0C" }}>
        <div className={cs.article + ` ${lang ? "" : cs.article_ar} `}>
          <div className={cs.head + " head"}>
            <div className="date_and_category">
              <h3>{lang ? Item.title_en : Item.title_ar}</h3>
              <h3>{DateParser(Item.date)}</h3>
            </div>
          </div>

          <div className={cs.body + " body"}>
            {(lang ? Item.content_en : Item.content_ar).map(
              ({ type, value }, key) => {
                if (type === "Title_L") {
                  return <h1 key={key}>{value}</h1>;
                }

                if (type === "Title_M") {
                  return <h2 key={key}>{value}</h2>;
                }

                if (type === "Parag") {
                  return <p key={key}>{value}</p>;
                }

                if (type === "Image") {
                  return <img key={key} src={value} />;
                }

                if (type === "VideoUrl") {
                  return <YouTubeVideo key={key} src={value} />;
                }
              }
            )}
            <p style={{ color: "#595858", fontWeight: "700" }}>
              {lang
                ? `References : ${Item.references_en}`
                : ` المصادر : ${Item.references_ar} `}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
