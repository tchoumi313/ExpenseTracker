import { Tabs } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
function BottomNavigation() {
  return (
    <>
      <div style={{ paddingBottom: "60px" }}></div>
      <div style={{ position: "fixed", bottom: 10, width: "100%" }}>
        <Tabs defaultValue="home" variant="outline" grow>
          <Tabs.List position="center">
            <Tabs.Tab value="home" leftSection={<IconHome stroke={2} size={18}/>}>
                Home
            </Tabs.Tab>
            <Tabs.Tab value="search" icon={<IconHome size={18} />}>
              Search
            </Tabs.Tab>
            <Tabs.Tab value="profile" icon={<IconHome size={18} />}>
              Profile
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </>
  );
}

export default BottomNavigation;
