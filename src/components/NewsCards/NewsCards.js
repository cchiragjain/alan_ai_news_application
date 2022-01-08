import { Grid, Grow } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";
import InfoCards from "../InfoCards/InfoCards";
// makeStyles in styles.js creates a hook which can be used
import useStyles from "./styles";

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  // on initial load there will be no articles
  if (!articles.length) {
    return <InfoCards />;
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.article}
            key={idx}
          >
            <NewsCard
              article={article}
              activeArticle={activeArticle}
              idx={idx}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
