const getFormatData = state => {
  return state.post.response.data !== undefined &&
    state.post.response.data.totalItems === 1
    ? state.post.response.data.items.map(item => {
        console.log(state.post.response.data);
        return {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: [item.volumeInfo.authors],
          publishedDate: item.volumeInfo.publishedDate,
        };
      })
    : null;
};

export default getFormatData;
