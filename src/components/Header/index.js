import React from "react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar
} from "carbon-components-react/lib/components/UIShell";

const TutorialHeader = () => (
  <Header aria-label="IBM Platform Name">
    <HeaderName href="#">Wenty</HeaderName>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
        <Notification20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
