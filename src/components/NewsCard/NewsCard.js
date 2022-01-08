import { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles";

// destructuring props
// and then destructuring the article in the same step
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  idx,
  activeArticle,
}) => {
  const classes = useStyles();

  // SCROLLING FUNCTIONALITY
  // found on SO somehow works!!
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (idx === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [idx, activeArticle, elRefs]);

  return (
    /* classNames will set class to be classes.card and if activeArticle === idx then make it active as well or else will be classes.card only */
    <Card
      ref={elRefs[idx]}
      className={classNames(
        classes.card,
        activeArticle === idx ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {idx + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
