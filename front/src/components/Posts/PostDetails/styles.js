import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "55px",
    maxWidth: "1200px",
  },
  gridBox: {
    backgroundColor: "#00243a73",
    borderRadius: "147% 100vh",
    width: "355px",
    margin: "10px auto",
  },
  gridBoxTest: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fb7c1b",
    borderRadius: "21% 67%",
    maxWidth: "600px",
    height: "280px",
    margin: "10px auto",
  },
  imageSection: {
    margin: "30px 10px",
    textAlign: "center",
  },
  media: {
    objectFit: "cover",
    height: "180px",
    width: "180px",
    filter: "drop-shadow(2px 4px 6px black)",
    padding: "10px 0px",
    borderRadius: "50%",
  },
  fullname: {
    fontSize: "2.5em",
    letterSpacing: "4px",
    backgroundColor: "#00243a",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "#d5d5d582 0px 3px 3px",
    fontWeight: "800",
  },
  gridHeading: {
    fontSize: "1.25em",
    letterSpacing: "2px",
    backgroundColor: "#00243a",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "#d5d5d582 0px 3px 3px",
    fontWeight: "800",
    textAlign: "center",
    margin: "25px 0px",
  },
  section: {
    borderRadius: "10px",
    padding: "20px 10px",
    margin: "20px 5px",
    boxShadow: "0px 5px 15px grey",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5em",
    textAlign: "center",
    letterSpacing: "2px",
    backgroundColor: "#7e7f80",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "#d5d5d582 0px 3px 3px",
    fontWeight: "700",
  },
  divider: {
    margin: "10px 0",
    backgroundColor: "#f2f2f2",
    filter: "drop-shadow(1px 1px 1px grey)",
  },
  // DetailString:

  cardWrapp: {
    position: "relative",
    maxWidth: "335px",
    width: "inherit",
    height: "215px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2) !important",
    borderRadius: "40px !important",
    margin: "10px",
  },
  avatar: {
    width: "inherit",
    filter: "drop-shadow(2px 2px 29px black)",
  },
  tagName: {
    display: "block",
    padding: "8px 28px 8px 14px",
    position: "absolute",
    right: "-14px",
    top: "20px",
    backgroundColor: "#00243ac4",
    color: "#fb7c1b",
    borderRadius: "17px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    width: "auto",
  },
  headingTitle: {
    fontWeight: "600",
    letterSpacing: "4px",
  },
  typo: {
    position: "absolute",
    bottom: "14%",
    backgroundColor: "#00243ac4",
    color: "whitesmoke",
    width: "100%",
    padding: "14px 0px",
    textAlign: "center",
    letterSpacing: "1px",
  },
  typoUsers: {
    position: "absolute",
    bottom: "14%",
    backgroundColor: "#00243ac4",
    color: "whitesmoke",
    width: "100%",
    padding: "14px 0px",
    textAlign: "center",
    letterSpacing: "1px",
  },
  cardWrappTest: {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    height: "385px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2) !important",
    borderRadius: "40px !important",
    margin: "10px",
  },
  typoTest: {
    position: "absolute",
    bottom: "0%",
    backgroundColor: "#00243ac4",
    color: "whitesmoke",
    width: "100%",
    padding: "17px 5px",
    letterSpacing: "2px",
    textAlign: "left",
  },
  spanTest: {
    color: "#fb7c1b",
    fontWeight: "600",
    padding: "0px 14px",
  },
  // Detail Info

  boxInfo: {
    margin: "0 auto",
    textAlign: "center",
    maxWidth: "605px",
    display: "flex",
    alignItems: "flex-start",
    filter: "drop-shadow(5px 5px 11px grey)",
    border: "5px double #d0d0d0",
    padding: "5px",
    "&:before": {
      position: "absolute",
      content: `''`,
      left: "0px",
      top: "-35px",
      width: "100%",
      height: "120%",
      clipPath: "polygon(41% 90%, 0% 0%, 100% 50%)",
      backgroundColor: "#00243a",
      zIndex: "-1",
    },
  },
  boxInfoGrid: {
    textAlign: "left",
    minWidth: "285px",
    margin: "5px !important",
    backgroundColor: "#f5f5f55e",
    filter: "drop-shadow(2px 4px 6px black)",
    borderRadius: "8px",
  },
}));