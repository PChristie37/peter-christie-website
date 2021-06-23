import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Education",
      description:
        "Arizona State University - Bachelor's of Fine Arts - Digital Culture (Film) ",
      timeSpent: "2011 – 2016",
      image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
    },
    {
      title: "Front End Developer",
      description:"Tivity Health",
      timeSpent: "March 2019 - Present",
      listTitle: "",
      list:[
        "Crafted front end user experience in ReactJS for client facing product.",
        "Maintained and added user features to React Native fitness application.",
        "Collaborated on architecture design for onboarding new clients for React Native Application with .NET backend services.",
        "MVP for Silversneakers Roku Application.",
        "Created Kafka Data Streaming structure for data manipulation."
      ],
      image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
    },
    {
      title: "Fullstack Developer",
      description:  "Walts TV ",
      timeSpent: "August 2015 - March 2019",
      listTitle: "",
      list:[
        "Deployed ReactJS POS, product reviews application, and product images for e-commerce website.",
        "Created POS system for Ebay with PHP and MySQL that manages submit, revise, end items, and import orders.",
        "Implemented real time monitoring solutions for back end services.",
        "Developed scalable solutions for collection of data and delivery of timely and efficient solutions.",
        "Crafted resources for designing of data store architecture, public and private APIs."
      ],
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom={item.listTitle ? true : false}>
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom={item.listTitle ? true : false}>
                    {item.timeSpent}
                  </Typography>
                  {item.listTitle ? 
                    <Typography variant="subtitle1">
                    {item.listTitle}
                  </Typography> : null}
                  <List>
                    {item.list  ? item.list.map((listItem, id) =>(
                      <ListItem>
                        <ListItemText
                          primary={listItem}
                        />
                      </ListItem>
                    )) : null}
                  </List>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
