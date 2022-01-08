import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Give me the latest news",
    id: 1,
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
    id: 2,
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
    id: 3,
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me news from CNN",
    id: 4,
  },
];
const InfoCard = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {infoCards.map((infoCard) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.infoCard}
            key={infoCard.id}
          >
            <div
              className={classes.card}
              style={{ backgroundColor: infoCard.color }}
            >
              <Typography variant="h5">{infoCard.title}</Typography>
              {/* if infoCard has the info take its title and split at every space and grab the 2nd element from it
                ex. News by sources => sources
                */}
              {infoCard.info ? (
                <Typography variant="h6">
                  <strong>{infoCard.title.split(" ")[2]}:</strong>
                  <br />
                  {infoCard.info}
                </Typography>
              ) : null}
              <Typography variant="h6">
                Try Saying:
                <br /> <em>{infoCard.text}</em>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default InfoCard;
