// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// 入口处的验证（用户是否登录...）
const checkNRefreshToken = () => (nextState, replace, callback) => {
  callback();
  return true;
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      onEnter: checkNRefreshToken(),
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      onEnter: checkNRefreshToken(),
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/list',
          onEnter: checkNRefreshToken(),
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/ListPage/reducer'),
              import('containers/ListPage/sagas'),
              import('containers/ListPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('ListPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/book',
          onEnter: checkNRefreshToken(),
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/BookPage/reducer'),
              import('containers/BookPage/sagas'),
              import('containers/BookPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('BookPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/music',
          onEnter: checkNRefreshToken(),
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/MusicPage/reducer'),
              import('containers/MusicPage/sagas'),
              import('containers/MusicPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('MusicPage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/move',
          onEnter: checkNRefreshToken(),
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/MovePage/reducer'),
              import('containers/MovePage/sagas'),
              import('containers/MovePage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('MovePage', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
