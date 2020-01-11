const state = getState();
  const userId = userSelectors.getUserId(state);

  try {
    const article = await fetchApi.getArticle(key, userId);

    dispatch(actions.appendArticle(artile));
    dispatch(usrerOperations.incrementRequestCount());
  } catch (e) {
    dispatch(errorOperations.requestFailed());
  }
};