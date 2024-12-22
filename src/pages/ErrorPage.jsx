import InfoMessage from "../components/InfoMessage";

function ErrorPage() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center h-screen p-4">
      <InfoMessage
        message={"Oops... You are on the wrong page."}
        link={"/"}
        linkText={"Return Home"}
      />
    </section>
  );
}

export default ErrorPage;
