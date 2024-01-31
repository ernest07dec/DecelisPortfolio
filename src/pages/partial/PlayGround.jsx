// FRAMERMOTION
import { AnimatedPage } from "../../components/framermotion/AnimatedPage";
import { LogInDemo } from "../../features/frontend_designs/LogInDemo";
import { Profile } from "../../features/profile/Profile";
export const PlayGround = () => {
  return (
    <AnimatedPage>
      {/* PROFILE */}
      <Profile />
      {/* FRONTEND DEMO */}
      <LogInDemo />
    </AnimatedPage>
  );
};
