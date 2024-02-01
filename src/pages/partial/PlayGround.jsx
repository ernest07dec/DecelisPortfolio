// FRAMERMOTION
import { AnimatedPage } from "../../components/framermotion/AnimatedPage";
import { FrontendDemo } from "../../features/frontend_designs/FrontendDemo";
import { Profile } from "../../features/profile/Profile";
export const PlayGround = () => {
  return (
    <AnimatedPage>
      {/* PROFILE */}
      <Profile />
      {/* FRONTEND DEMO */}
      <FrontendDemo />
    </AnimatedPage>
  );
};
