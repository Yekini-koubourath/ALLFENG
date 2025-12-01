import ProfileCard from "./ProfileCard";
import Userview from "../components/Userview";

export default function ProfilePage() {
  return (
    <Userview style={{ 
      // display: "flex", 
      // justifyContent: "center", 
      padding: "40px",
    }}>
      <ProfileCard />
    </Userview>
  );
}
