import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";
// makeStyles in styles.js creates a hook which can be used
import useStyles from "./styles";

const NewsCards = ({ articles }) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} idx={idx} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
