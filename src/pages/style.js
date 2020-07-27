import { deepOrange, deepPurple } from '@material-ui/core/colors';

const HeaderStyle = {
    root: {
        flexGrow: 1,
        height: 500
      },
      avatar: {
        margin: 10,
      },
      bigAvatar: {
        margin: 10,
        width: 450,
        height: 450,
        boxShadow: "10px 10px 5px #aaaaaa",
      },
      nameHeader: {
          margin: 20,
          fontColor: "gray"
      },
      headerText: {
          marginTop: 20,
          marginLeft: 100,
          marginRight: 100,
          textAlign: "justify",
          fontSize: 20
      },
      purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
      },
      orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
      }
}

export default HeaderStyle;