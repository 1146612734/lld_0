export const topicPrimaryStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      color: '#555',
    },
    tab: {
      backgroundColor: theme.palette.secondary.dark,
      textAlign: 'center',
      display: 'inline-block',
      padding: '0 6px',
      color: '#fff',
      borderRadius: 3,
      marginRight: 10,
      fontSize: '12px',
    },
  }
}
export const topicSecondaryStyles = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 3,
    },
    count: {
      textAlign: 'center',
      marginRight: 20,
    },
    userName: {
      color: '#9e9e9e',
      marginRight: 20,
      fontSize: '12px',
    },
    accentColor: {
      color: theme.palette.secondary.dark,
    },
  }
}
export default topicPrimaryStyles
