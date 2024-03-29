import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";

import Hero from "../../components/Hero";
import TailoringInfo from "../../components/TailoringInfo";
import AboutUs from "../../components/AboutUs";
import GroupBookings from "../../components/GroupBookings";

const FrontPageView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-24 mb-28">
          <Hero />
          <Container>
            <TailoringInfo />
            <GroupBookings />
            <AboutUs />
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default FrontPageView;
