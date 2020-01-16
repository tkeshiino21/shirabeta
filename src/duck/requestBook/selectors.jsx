const getFormatData = state => {
  return state.request.response.data !== undefined &&
    state.request.response.data.totalItems === 1
    ? state.request.response.data.items.map(item => {
        // console.log(state.request.response.data);
        return {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: [item.volumeInfo.authors],
          publishedDate: item.volumeInfo.publishedDate,
          image: item.volumeInfo.imageLinks.thumbnail,
        };
      })
    : null;
};

export default getFormatData;
