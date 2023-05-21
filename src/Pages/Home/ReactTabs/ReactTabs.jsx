import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTabs = () => {
  return (
    <div className="text-center">
      <Tabs>
        <TabList>
          <Tab>Sports cars</Tab>
          <Tab>Regular cars</Tab>
          <Tab>Truck</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
