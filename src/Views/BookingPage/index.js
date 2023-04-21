import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";

const BookingPageView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-32 mb-28">
          <Container>
            <div
              className="flex flex-col md:flex-row justify-start max-w-none mt-8 md:mt-20"
            >
              <div className="md:w-1/2 flex flex-col items-start md:items-center">
                <h2 className="text-start md:w-10/12 lg:w-8/12">
                  Bóka tíma
                </h2>
                <p className="pt-5 italic md:w-10/12 lg:w-8/12">
                  Bókaðu tima ....
                </p>
              </div>
              <div className="flex flex-col justify-start items-start md:w-1/2 mt-4 md:pt-0">
                
              </div>
            </div>
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default BookingPageView;
