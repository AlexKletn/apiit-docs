import CreateHostSection from "@/pages/GuidePage/Sections/CreateApiLayer/CreateHostSection.tsx";
import CreateSingleEndpoint from "@/pages/GuidePage/Sections/CreateSingleEndpoint.tsx";
import PrepareDirectoryStructureSection
  from "@/pages/GuidePage/Sections/CreateApiLayer/PrepareDirectoryStructureSection.tsx";
import CreateEndpointSection from "@/pages/GuidePage/Sections/CreateApiLayer/CreateEndpointSection.tsx";
import SendRequestSection from "@/pages/GuidePage/Sections/CreateApiLayer/SendRequestSection.tsx";
import type {MenuRouteItemType} from "@/hooks/types.ts";

const guideMenuConfig: MenuRouteItemType[] = [
  {
    type: "group",
    label: "Create api layer",

    children: [
      {
        key: "api-layer/prepare-structure",
        label: "Prepare the structure",
        component: <PrepareDirectoryStructureSection />
      },
      {
        key: "api-layer/create-host",
        label: "Create host",
        component: <CreateHostSection />
      },
      {
        key: "api-layer/create-endpoint",
        label: "Create endpoint",
        component: <CreateEndpointSection />
      },
      {
        key: "api-layer/send-request",
        label: "Send request",
        component: <SendRequestSection />
      }
    ]
  },
  {
    type: "divider",
  },
  {
    key: "single",
    index: true,
    label: "Create single endpoint",
    component: <CreateSingleEndpoint />
  },
]

export default guideMenuConfig;
