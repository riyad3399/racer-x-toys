#cmd --

npm create vite@latest name-of-your-project -- --template react

npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i daisyui
npm i firebase
npm i mongodb
npm i express
npm i cors
npm i dotenv
npm install react-icons --save


# Racer X Toys <a name="TOP"></a>

React

> project


---

## Live Link

# Hosted in Firebase -> https://racerxtoys-df94f.web.app/

# install-package

    Markup :  # install-package #

- Tailwindcss
- Daisy UI
- React router
- Recharts
- React icon
- firebase
- Mongodb
- Express
- cors
- dotenv
- more packages etc.



# Route declaration

    Route :  first slice data after click

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://racer-x-toys-server.vercel.app/alltoys/${params.id}`
          ),
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "updateToy/:id",
        element: (
          <PrivateRoutes>
            <UpdateToy></UpdateToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://racer-x-toys-server.vercel.app/allToys/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

# Private Route declaration

const PrivateRoute = ({ children }) => {
  // use state
  const { user, loader } = useContext(AuthContext);
  // location
  const location = useLocation();
  // loader
  if (loader) {
    return (
     <div style={loaderContainerStyle}>
        <BallTriangle
          height={250}
          width={250}
          radius={5}
          color="#0000FF"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};