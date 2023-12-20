import {Typography} from "antd";
import {useMemo} from "react";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import PackageManagerSelector from "@/components/PackageManagerSelector/PackageManagerSelector.tsx";
import CodeViewer from "@/components/CodeViewer/CodeViewer.tsx";

import installNpmBash from '@/codeSamples/installation/install-npm.bash?raw';
import installYarnBash from '@/codeSamples/installation/install-yarn.bash?raw';
import usePageTitle from "@/hooks/usePageTitle.ts";

const { Title, Paragraph } = Typography;

const installCode = {
  npm: installNpmBash,
  yarn: installYarnBash
}

const InstallationPage = () => {
  usePageTitle("Installation")

  const { state } = useSettingsContext();

  const currentInstallCode = useMemo(() => installCode[state.packageManagerType], [state.packageManagerType])

  return (
    <div>
      <Title>Apiit instalation</Title>

      <Paragraph>
        To install Apiit, run this command in your project folder:
      </Paragraph>

      <CodeViewer
        code={currentInstallCode}
        language="bash"
        settings={(
          <PackageManagerSelector />
        )}
      />
    </div>
  )
}

export default InstallationPage;
