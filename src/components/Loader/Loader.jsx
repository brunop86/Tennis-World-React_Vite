import gif from "./loading.gif";

const Loader = () => {
  return (
    <>
      <div
        className="position-fixed bg-dark w-100 h-100"
        style={{ zIndex: 2000, opacity: "70%" }}
      ></div>
      <div
        className="position-fixed top-50 start-50 translate-middle bg-white shadow-lg px-4 py-2 rounded"
        style={{ zIndex: 2000 }}
      >
        <p className="pt-3 text-dark">
          <img
            src={gif}
            alt="loading"
            className="me-3"
            style={{ opacity: "70%", width: "30px" }}
          />
          Loading... Please wait
        </p>
      </div>
    </>
  );
};

export default Loader;
