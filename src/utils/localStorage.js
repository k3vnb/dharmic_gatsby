export const setLocalStorageApp = app => {
  localStorage.setItem('app', JSON.stringify(app));
}

export const getApp = () => {
  try {
    const app = JSON.parse(localStorage.getItem('app'));
    return app;
  } catch (err) {
    if (process.env === 'development') {
      console.error(err);
    }
    return null;
  }
}
