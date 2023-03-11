import { GoalFlipContainer } from "containers/GoalFlip";
import { GoalFlipContextProvider } from "framework/GoalFlipContext";

export default function Dashboard() {
  return (
    <GoalFlipContextProvider>
      <GoalFlipContainer />
    </GoalFlipContextProvider>
  );
}
