import { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";

const alanKey =
  "5a6d14a9e8da336b1c0577d766c61b0e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  // -1 works for some reason 0 reads the previous one
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    // will only run once on initialisation
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          // console.log(articles);
          setNewsArticles(articles);
          // when search again need to reset back to original
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {/* TODO Remove this image and add text to say click button */}
        <img
          src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.svg"
          className={classes.alanLogo}
          alt="alan-logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
